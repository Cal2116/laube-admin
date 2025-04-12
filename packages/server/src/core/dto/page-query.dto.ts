import { IsDate, IsNumber, JsonDateFormat, Min } from '@core/decorators'
import { IsOptional } from 'class-validator'

export class PageQueryDto {
  @IsOptional()
  @IsDate('创建开始时间')
  @JsonDateFormat()
  createStartTime?: Date

  @IsOptional()
  @IsDate('创建结束时间')
  @JsonDateFormat()
  createEndTime?: Date

  @IsNumber('页码')
  @Min(1, '页码')
  page: number

  @IsNumber('每页条数')
  @Min(1, '每页条数')
  pageSize: number
}
