import { ApiResultInterceptor } from '@core/interceptors/api-result.interceptor'
import { UseInterceptors } from '@nestjs/common'

interface ClassConstructor {
  new (...args: any[]): any
}

/**
 * 接口请求成功装饰器
 *
 * @description 调用成功拦截器
 */
export const Result = (dto?: ClassConstructor) => {
  return UseInterceptors(new ApiResultInterceptor(dto))
}
