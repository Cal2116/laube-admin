import { IsNumber, IsString } from '@core/decorators'
import { PageQueryDto } from '@core/dto'
import { IsOptional } from 'class-validator'

export class RolePageQueryDto extends PageQueryDto {
  @IsOptional()
  @IsString('角色名称')
  name?: string

  @IsOptional()
  @IsNumber('状态')
  status?: number
}
