import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { ExceptionFilter } from './core/filter/exception.filter'
import { ResponseInterceptor } from './core/interceptors/response.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new ExceptionFilter())

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
