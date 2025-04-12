import { ConfigModule } from '@core/config/config.module'
import { LoggerModule } from '@core/logger/logger.module'
import { PrismaModule } from '@core/prisma/prisma.module'
import { RedisModule } from '@core/redis/redis.module'
import { SystemModule } from '@modules/system/system.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [ConfigModule, LoggerModule, RedisModule, PrismaModule.forRootAsync(), SystemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
