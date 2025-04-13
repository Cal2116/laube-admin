import { ModuleMetadata, Type } from '@nestjs/common'
import { Prisma } from 'prisma-mysql'

export interface PrismaModuleOptions {
  url: string
  providerName?: string
  retryAttempts?: number
  retryDelay?: number
  options?: Prisma.PrismaClientOptions
  connectionFactory?: (connection: any, providerName?: string) => any
  connectionErrorFactory?: (error: any) => any
}

export interface PrismaModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  name?: string
  useClass?: Type<PrismaOptionsFactory>
  useFactory?: (...args: any[]) => Promise<PrismaModuleFactoryOptions> | PrismaModuleFactoryOptions
  inject?: any[]
}

export interface PrismaOptionsFactory {
  createPrismaModuleOptions(): Promise<PrismaModuleOptions> | PrismaModuleOptions
}

export type PrismaModuleFactoryOptions = Omit<PrismaModuleOptions, 'providerName'>
