import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'

import { consoleTransport, dailyFileTransport } from './createRotateTransport'

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
        const logLevel = configService.get('LOG_LEVEL', 'info')
        const logDir = configService.get('LOG_DIR', 'logs')
        const enableFileLog = configService.get('ENABLE_FILE_LOG', false)

        const transports: any[] = [consoleTransport(appName, logLevel)]
        if (enableFileLog) {
          transports.push(dailyFileTransport(appName, logLevel, logDir))
        }

        return {
          transports,
        }
      },
    }),
  ],
})
export class LoggerModule {}
