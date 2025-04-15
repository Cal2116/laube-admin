import { LoginResult } from '@laube-admin/common'
import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginDTO } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDTO): Promise<LoginResult> {
    return this.authService.login(loginDto)
  }
}
