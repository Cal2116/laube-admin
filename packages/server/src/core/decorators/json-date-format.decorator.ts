import { BadRequestException } from '@nestjs/common'
import { Transform } from 'class-transformer'
import * as dayjs from 'dayjs'

export function JsonDateFormat(format: string = 'YYYY-MM-DD HH:mm:ss') {
  return Transform(({ value }) => {
    const date = dayjs(value, format, true)

    if (!date.isValid()) {
      throw new BadRequestException(`接口参数日期格式错误, 参数值：${value}`)
    }

    return date.toDate()
  })
}
