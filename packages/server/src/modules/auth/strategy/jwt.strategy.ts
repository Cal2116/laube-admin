import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'auth') {
  constructor(protected configService: ConfigService) {
    const secret = configService.get<string>('JWT_SECRET')

    if (!secret) {
      throw new InternalServerErrorException('请在环境变量中配置 JWT_SECRET')
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    })
  }

  validate(data: any) {
    const { id } = data
    return { id }
  }
}
