import { DateFormat } from '@core/decorators'
import { Transform } from 'class-transformer'

export class RoleInfoDto {
  id: string

  name: string

  description: string

  status: number

  @DateFormat()
  createdAt: Date

  @DateFormat()
  updatedAt: Date

  @Transform(({ value }) => {
    return value.map((item: any) => item.menuId)
  })
  menus: any[]
}
