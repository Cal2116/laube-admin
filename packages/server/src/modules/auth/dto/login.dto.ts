import { IsNotEmpty, IsString } from '@core/decorators'
import { LoginRequest } from '@laube-admin/common'
export class LoginDTO implements LoginRequest {
  @IsNotEmpty('用户名')
  @IsString('用户名')
  username: string

  @IsNotEmpty('密码')
  @IsString('密码')
  password: string
}
