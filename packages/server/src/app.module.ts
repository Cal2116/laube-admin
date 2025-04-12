import { Module } from '@nestjs/common'

import { ConfigModule } from './core/config/config.module'
import { LoggerModule } from './core/logger/logger.module'

@Module({
  imports: [ConfigModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
