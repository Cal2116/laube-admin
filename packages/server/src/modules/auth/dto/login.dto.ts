import { IsNotEmpty, IsString } from '@core/decorators'

export class LoginDTO {
  @IsNotEmpty('用户名')
  @IsString('用户名')
  username: string

  @IsNotEmpty('密码')
  @IsString('密码')
  password: string
}
