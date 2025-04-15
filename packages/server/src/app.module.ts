import { ConfigModule } from '@core/config/config.module'
import { JwtGuard } from '@core/guards/jwt.guard'
import { LoggerModule } from '@core/logger/logger.module'
import { PrismaModule } from '@core/prisma/prisma.module'
import { RedisModule } from '@core/redis/redis.module'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

import { AuthModule } from './modules/auth/auth.module'
import { SystemModule } from './modules/system/system.module'

@Module({
  imports: [
    ConfigModule,
    LoggerModule,
    RedisModule,
    PrismaModule.forRootAsync(),
    SystemModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
