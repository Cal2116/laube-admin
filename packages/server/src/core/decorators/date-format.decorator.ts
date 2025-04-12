import { Transform } from 'class-transformer'
import * as dayjs from 'dayjs'

/**
 * 日期格式化装饰器
 *
 * @description 将接口返回值对象中指定字段转换为字符串日期格式
 */
export const DateFormat = (format: string = 'YYYY-MM-DD HH:mm:ss') => {
  return Transform(({ value }) => {
    if (value) {
      return dayjs(value).format(format)
    }
    return value
  })
}
