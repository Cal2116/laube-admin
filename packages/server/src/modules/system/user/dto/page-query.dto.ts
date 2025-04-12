import { IsIn, IsNumber, IsString } from '@core/decorators'
import { PageQueryDto } from '@core/dto'
import { IsOptional } from 'class-validator'

export class UserPageQueryDto extends PageQueryDto {
  @IsOptional()
  @IsString('用户名')
  username?: string

  @IsOptional()
  @IsNumber('用户状态')
  @IsIn([0, 1], '用户状态')
  status?: number
}
