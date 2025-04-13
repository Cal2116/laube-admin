import { ResponseCode, ResponseMessage, ResponseShell } from '@laube-admin/common'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { catchError, map, Observable } from 'rxjs'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private dto?: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp()
    ctx.getResponse().status(200)

    return next.handle().pipe(
      map(async data => {
        const resultData: ResponseShell = {
          code: ResponseCode.SUCCESS,
          message: ResponseMessage.SUCCESS,
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
