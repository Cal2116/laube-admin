import { IsNotEmpty, IsString } from '@core/decorators'
import { LoginParams } from '@laube-admin/common'
export class LoginDTO implements LoginParams {
  @IsNotEmpty('用户名')
  @IsString('用户名')
  username: string

  @IsNotEmpty('密码')
  @IsString('密码')
  password: string
}
