import { createKeyv } from '@keyv/redis'
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager'
import { Global, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/**
 * Redis模块
 *
 * @description 异步注册 Redis 缓存, 使用时在构造函数中通过 @Inject(CACHE_MANAGER) 注入
 */
@Global()
@Module({
  imports: [
    NestCacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisHost = configService.get('REDIS_HOST')
        const redisPort = configService.get('REDIS_PORT')
        const redisPassword = configService.get('REDIS_PASSWORD')

        return {
          stores: [createKeyv(`redis://:${redisPassword}@${redisHost}:${redisPort}`)],
        }
      },
    }),
  ],
  exports: [NestCacheModule],
})
export class RedisModule {}
