import { Body, Controller, Get, Post, Req } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginDTO } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('password')
  getPassword() {
    return this.authService.getPassword()
  }

  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto)
  }

  @Get('codes')
  getUserPermissionCodes(@Req() req: any) {
    const { userId } = req.user

    return this.authService.getUserPermissionCodes(userId.id)
  }
}
