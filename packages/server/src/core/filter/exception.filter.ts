import { ResponseCode } from '@laube-admin/common'
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter as NestExceptionFilter,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common'

@Catch(HttpException)
export class ExceptionFilter implements NestExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    if (exception instanceof UnauthorizedException) {
      response.status(200).json({
        code: ResponseCode.UNAUTHORIZED,
        message: '请重新登录',
        data: null,
      })
    } else {
      const message = (exception.getResponse() as any).message

      response.status(200).json({
        code: ResponseCode.ERROR,
        message,
        data: null,
      })
    }
  }
}
