import { DynamicModule, Module } from '@nestjs/common'

import { PRISMA_CONNECTION_NAME } from './prisma.constant'
import { PrismaModuleAsyncOptions } from './prisma.interface'
import { PrismaCoreModule } from './prisma-core.module'
import { PrismaDefaultService } from './prisma-default.service'

/**
 * Prisma模块
 *
 * @description 通过动态模块注册 Prisma Client
 * 使用时在构造函数中通过 @Inject(PRISMA_CONNECTION_NAME) 注入
 */
@Module({})
export class PrismaModule {
  /**
   * 同步注册 Prisma Client
   */
  static forRoot(url: string, providerName?: string): DynamicModule
  static forRoot(arg: any, ...args: any[]): DynamicModule {
    if (typeof arg === 'string') {
      return PrismaCoreModule.forRoot({
        url: arg,
        providerName: args[0],
      })
    }

    return PrismaCoreModule.forRoot(arg)
  }

  /**
   * 异步注册 Prisma Client
   * 如果 options 为空，则使用 PrismaDefaultService 创建 PrismaClient
   */
  static forRootAsync(options?: PrismaModuleAsyncOptions): DynamicModule {
    let _options: PrismaModuleAsyncOptions
    if (!options) {
      _options = {
        name: PRISMA_CONNECTION_NAME,
        useClass: PrismaDefaultService,
      }
    } else {
      _options = options
    }

    return PrismaCoreModule.forRootAsync(_options)
  }
}
