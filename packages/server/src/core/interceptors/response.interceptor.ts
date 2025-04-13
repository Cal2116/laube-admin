import { ResultCode, ResultMessage } from '@laube-admin/common'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { catchError, map, Observable } from 'rxjs'

/**
 * API 成功拦截器
 *
 * @description 用于序列化接口返回值
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private dto?: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp()
    ctx.getResponse().status(200)

    return next.handle().pipe(
      map(async data => {
        const resultData = {
          code: ResultCode.SUCCESS,
          message: ResultMessage.SUCCESS,
          data,
        }

        return resultData
      }),
      catchError(error => {
        throw error
      })
    )
  }
}
