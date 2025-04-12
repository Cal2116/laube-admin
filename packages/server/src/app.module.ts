import { Module } from '@nestjs/common'

import { ConfigModule } from './core/config/config.module'
import { LoggerModule } from './core/logger/logger.module'
import { PrismaModule } from './core/prisma/prisma.module'
import { RedisModule } from './core/redis/redis.module'

@Module({
  imports: [ConfigModule, LoggerModule, RedisModule, PrismaModule.forRootAsync()],
  controllers: [],
  providers: [],
})
export class AppModule {}
