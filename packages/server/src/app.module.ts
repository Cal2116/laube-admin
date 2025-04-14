import { ConfigModule } from '@core/config/config.module'
import { JwtGuard } from '@core/guards/jwt.guard'
import { PermissionGuard } from '@core/guards/permission.guard'
import { LoggerModule } from '@core/logger/logger.module'
import { PrismaModule } from '@core/prisma/prisma.module'
import { RedisModule } from '@core/redis/redis.module'
import { AuthModule } from '@modules/auth/auth.module'
import { SystemModule } from '@modules/system/system.module'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'

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
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule {}
