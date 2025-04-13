import { NO_AUTH } from '@core/decorators'
import { ExecutionContext, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'

@Injectable()
export class JwtGuard extends AuthGuard('auth') {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService
  ) {
    super()
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // 判断是否为开发环境
    const isPassAll = this.isPassAll()
    if (isPassAll) {
      return true
    }

    // 判断接口是否具有 @NoAuth 注解
    const isNoAuth = this.isNoAuth(context)
    if (isNoAuth) {
      return true
    }

    // 判断接口是否在白名单中
    const isApiWhiteList = this.isApiWhiteList(context)
    if (isApiWhiteList) {
      return true
    }

    return super.canActivate(context)
  }

  private isNoAuth(context: ExecutionContext): boolean {
    const isNoAuth = this.reflector.get<boolean>(NO_AUTH, context.getHandler())

    return isNoAuth
  }

  private isApiWhiteList(context: ExecutionContext): boolean {
    const apiWhiteList = this.configService.get<string[]>('JWT_API_WHITE_LIST', [])

    if (!apiWhiteList) return false

    const request = context.switchToHttp().getRequest()
    const url = request.url

    return apiWhiteList.includes(url)
  }

  private isPassAll(): boolean {
    const nodeEnv = process.env.NODE_ENV

    const apiWhiteList = this.configService.get<string[]>('JWT_API_WHITE_LIST', [])

    if (!apiWhiteList) return false

    return nodeEnv === 'development' && apiWhiteList.includes('/**')
  }
}
