import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'

import { AppModule } from './app.module'
import { ExceptionFilter } from './core/filter/exception.filter'
import { ResponseInterceptor } from './core/interceptors/response.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor())

  // 全局异常过滤器
  app.useGlobalFilters(new ExceptionFilter())

  // 将日志替换为winston
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))

  // 开启全局数据校验管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  )

  await app.listen(process.env.PORT ?? 8848)
}
bootstrap()
