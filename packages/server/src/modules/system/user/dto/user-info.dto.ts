import { DateFormat } from '@core/decorators'
import { Exclude, Expose, Transform } from 'class-transformer'

export class UserInfoDto {
  username: string

  realName: string

  @Exclude()
  password: string

  phone: string

  email: string

  status: number

  remark: string

  @DateFormat()
  createdAt: Date

  @DateFormat()
  updatedAt: Date

  @Transform(({ value }) => {
    if (value && value.length > 0) {
      return value.map((item: any) => item.roleId)
    }

    return []
  })
  @Expose({ name: 'roles' })
  roleIds: string[]
}
