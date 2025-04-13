import { Transform } from 'class-transformer'
import * as dayjs from 'dayjs'

export const DateFormat = (format: string = 'YYYY-MM-DD HH:mm:ss') => {
  return Transform(({ value }) => {
    if (value) {
      return dayjs(value).format(format)
    }
    return value
  })
}
