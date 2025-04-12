import { PERMISSION_KEY } from '@core/decorators'
import { UserService } from '@modules/system/user/user.service'
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Reflector } from '@nestjs/core'

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
    private configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()

    const permissionCodeList = this.getPermissionCodeList(context)
    if (!permissionCodeList.length) return true

    // 判断白名单接口
    const isApiWhiteList = this.isApiWhiteList(req)
    if (isApiWhiteList) {
      return true
    }

    // 如果请求上下文中没有用户信息，则抛出异常
    const userId = this.isUserVerify(req)

    // 判断白名单角色
    const isRoleWhiteList = await this.isRoleWhiteList(userId)
    if (isRoleWhiteList) {
      return true
    }

    // 检查是否具有接口访问权限
    await this.checkPermission(permissionCodeList, userId)

    return true
  }

  private isApiWhiteList(req: any) {
    const apiWhiteList = this.configService.get<string[]>('PERMISSION_API_WHITE_LIST', [])

    if (!apiWhiteList) return false

    if (apiWhiteList.includes('/**')) {
      return true
    }

    const isSignIn = apiWhiteList.some((whiteList: string) => req.url === whiteList)

    return isSignIn
  }

  private isUserVerify(req: any) {
    const { userId } = req.user

    if (!userId) {
      throw new UnauthorizedException('登录已过期, 请重新登录')
    }

    return userId.id
  }

  private async isRoleWhiteList(userId: string) {
    const apiWhiteList = this.configService.get<string[]>('PERMISSION_ROLE_WHITE_LIST', [])

    if (!apiWhiteList) return false

    const userRoles = await this.userService.getUserRoles(userId)
    const userRoleNames = userRoles.map(role => role.name)

    const hasWhiteList = userRoleNames.some(roleName => apiWhiteList.includes(roleName))

    return hasWhiteList
  }

  /**
   * 检查用户是否具有接口访问权限
   *
   * @description 获取接口 class 与 handler 的权限注解
   * 查询当前JWT中用户信息, 获取权限
   * 判断权限是否具有接口访问权限
   */
  private async checkPermission(permissionCodeList: string[], userId: string) {
    const userPermissionCodes = await this.userService.getUserPermissionCodes(userId)

    const hasInvalidPermission = permissionCodeList.some(
      code => !userPermissionCodes.some(userPermissionCode => userPermissionCode === code)
    )

    if (hasInvalidPermission) {
      throw new UnauthorizedException('没有权限访问该接口')
    }
  }

  private getPermissionCodeList(context: ExecutionContext) {
    const classPermissions = this.reflector.get<string[]>(PERMISSION_KEY, context.getClass()) || []

    const handlerPermission =
      this.reflector.get<string[]>(PERMISSION_KEY, context.getHandler()) || []

    const permissionCodeList = classPermissions.flatMap(classPermission =>
      handlerPermission.map(handlerPerm => `${classPermission}:${handlerPerm}`)
    )

    return permissionCodeList
  }
}
