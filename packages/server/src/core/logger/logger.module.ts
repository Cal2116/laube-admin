import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'

import { consoleTransport, mongoTransport } from './createRotateTransport'

/**
 * 日志模块
 *
 * @description 使用 Winston 注册日志, 使用时在service中通过 private logger = new Logger() 注入
 */
@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const appName = configService.get('APP_NAME', 'App')
        const logDb = configService.get('LOG_DB')
        const logCollection = configService.get('LOG_COLLECTION')
        const logLevel = configService.get('LOG_LEVEL')

        return {
          transports: [
            consoleTransport(appName),
            mongoTransport({
              db: logDb,
              collection: logCollection,
              level: logLevel,
              storeHost: true,
            }),
          ],
        }
      },
    }),
  ],
})
export class LoggerModule {}
