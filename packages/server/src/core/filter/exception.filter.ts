import { ArgumentsHost, Catch, ExceptionFilter as NestExceptionFilter, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class ExceptionFilter implements NestExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const message = (exception.getResponse() as any).message

    response.status(200).json({
      code: -1,
      message,
      data: null,
    })
  }
}
