import { PageResponseDto } from '@core/dto/page-response.dto'
import { convertToInstance } from '@core/utils/convert.util'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { catchError, map, Observable } from 'rxjs'

/**
 * API 成功拦截器
 *
 * @description 用于序列化接口返回值
 */
@Injectable()
export class ApiResultInterceptor implements NestInterceptor {
  constructor(private dto?: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(async data => {
        const resultData = {
          code: 0,
          message: '操作成功',
          data: data,
        }

        if (this.dto && this.dto === PageResponseDto) {
          resultData['data'] = new PageResponseDto(data.items, data.total)
          return resultData
        }

        if (this.dto) {
          resultData['data'] = await convertToInstance(this.dto, data)
          return resultData
        }

        return resultData
      }),
      catchError(error => {
        throw error
      })
    )
  }
}
