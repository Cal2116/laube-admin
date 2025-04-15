import { LoginUserInfo } from '@laube-admin/common'
import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common'

import { UserService } from './user.service'

@Controller('/system/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/info')
  async getUserInfo(@Req() req: any): Promise<LoginUserInfo> {
    if (!req.user) {
      throw new UnauthorizedException('未获取到用户信息')
    }

    const { id } = req.user

    return await this.userService.getLoginUserInfo(id)
  }
}
