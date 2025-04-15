import { LoginResult } from '@laube-admin/common'
import { UserService } from '@modules/system/user/user.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'

import { LoginDTO } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async login(loginDto: LoginDTO): Promise<LoginResult> {
    const user = await this.userService.getUserByUsername(loginDto.username)

    if (!user) {
      throw new BadRequestException('用户不存在')
    }

    const isPasswordValid = await argon2.verify(
      user.password,
      loginDto.password
    )

    if (!isPasswordValid) {
      throw new BadRequestException('密码错误')
    }

    const payload = {
      id: user.id,
    }

    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
