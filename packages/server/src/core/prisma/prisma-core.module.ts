import {
  DynamicModule,
  Global,
  Logger,
  Module,
  OnApplicationShutdown,
  Provider,
  Type,
} from '@nestjs/common'
import { PrismaClient } from 'prisma-mysql'
import { catchError, defer, lastValueFrom, throwError } from 'rxjs'

import { PRISMA_CONNECTION_NAME, PRISMA_MODULE_OPTIONS } from './prisma.constant'
import {
  PrismaModuleAsyncOptions,
  PrismaModuleOptions,
  PrismaOptionsFactory,
} from './prisma.interface'
import { getDbType, getPrismaClient, retryConnect } from './prisma.utils'

@Global()
@Module({})
export class PrismaCoreModule implements OnApplicationShutdown {
  private static connections: Record<string, PrismaClient> = {}

  onApplicationShutdown() {
    if (PrismaCoreModule.connections && Object.keys(PrismaCoreModule.connections).length > 0) {
      Object.values(PrismaCoreModule.connections).forEach(client => {
        client.$disconnect()
      })
    }
  }

  static forRoot(_options: PrismaModuleOptions): DynamicModule {
    const logger = new Logger('Prisma')

    const {
      url,
      providerName,
      retryAttempts = 3,
      retryDelay = 3000,
      options = {},
      connectionFactory,
      connectionErrorFactory,
    } = _options

    const datasourceUrl = options?.datasourceUrl || url

    const dbtype = getDbType(datasourceUrl)

    const _prismaClient = getPrismaClient(dbtype)

    if (!_prismaClient) {
      logger.error(`不支持的数据库类型: ${dbtype}`)
      throw new Error(`不支持的数据库类型: ${dbtype}`)
    }

    const prismaProviderName = providerName || PRISMA_CONNECTION_NAME

    const prismaConnectionFactory =
      connectionFactory || (connectionOptions => new _prismaClient(connectionOptions))

    const prismaConnectionErrorFactory = connectionErrorFactory || (error => error)

    const prismaClientProvider: Provider = {
      provide: prismaProviderName,
      useFactory: async () => {
        let client: PrismaClient

        if (this.connections[prismaProviderName]) {
          client = this.connections[prismaProviderName]
        } else {
          client = prismaConnectionFactory({
            datasourceUrl,
            ..._options.options,
          })

          this.connections[prismaProviderName] = client
        }

        await lastValueFrom(
          defer(() => client.$connect()).pipe(
            retryConnect(retryAttempts, retryDelay),
            catchError(error => throwError(() => prismaConnectionErrorFactory(error)))
          )
        )

        return client
      },
    }

    return {
      module: PrismaCoreModule,
      providers: [prismaClientProvider],
      exports: [prismaClientProvider],
    }
  }

  static forRootAsync(_options: PrismaModuleAsyncOptions): DynamicModule {
    const logger = new Logger('Prisma')

    const prismaProviderName = _options.name || PRISMA_CONNECTION_NAME

    // 使用 useFactory 或者 useClass 返回的数据库链接信息创建 PrismaClient
    const prismaClientProvider: Provider = {
      provide: prismaProviderName,
      inject: [PRISMA_MODULE_OPTIONS],
      useFactory: (prismaModuleOptions: PrismaModuleOptions) => {
        const { url, options = {}, connectionFactory, connectionErrorFactory } = prismaModuleOptions

        const datasourceUrl = options?.datasourceUrl || url
        const dbtype = getDbType(url)
        const _prismaClient = getPrismaClient(dbtype)

        if (!_prismaClient) {
          logger.error(`不支持的数据库类型: ${dbtype}`)
          throw new Error(`不支持的数据库类型: ${dbtype}`)
        }

        const prismaConnectionFactory =
          connectionFactory || (connectionOptions => new _prismaClient(connectionOptions))

        const prismaConnectionErrorFactory = connectionErrorFactory || (error => error)

        try {
          if (this.connections[prismaProviderName]) {
            return this.connections[prismaProviderName]
          }

          const client = prismaConnectionFactory({
            datasourceUrl,
            ...options,
          })

          this.connections[prismaProviderName] = client

          return client
        } catch (e) {
          throw prismaConnectionErrorFactory(e)
        }
      },
    }

    const asyncProviders = this.createAsyncOptionsProvider(_options)

    return {
      module: PrismaCoreModule,
      providers: [prismaClientProvider, ...asyncProviders],
      exports: [prismaClientProvider],
    }
  }

  private static createAsyncOptionsProvider(_options: PrismaModuleAsyncOptions): Provider[] {
    if (_options.useFactory) {
      return [
        {
          provide: PRISMA_MODULE_OPTIONS,
          useFactory: _options.useFactory,
          inject: _options.inject || [],
        },
      ]
    }

    const useClass = _options.useClass as Type<PrismaOptionsFactory>
    const inject = [useClass]

    return [
      {
        provide: PRISMA_MODULE_OPTIONS,
        inject,
        useFactory: async (optionsFactory: PrismaOptionsFactory) =>
          optionsFactory.createPrismaModuleOptions(),
      },
      {
        provide: useClass,
        useClass,
      },
    ]
  }
}
