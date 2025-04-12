import { ModuleMetadata, Type } from '@nestjs/common'
import { Prisma } from 'prisma-mysql'

export interface PrismaModuleOptions {
  // 数据库连接字符串
  url: string
  // PrismaClient DI注册名称
  providerName?: string
  // 重试次数
  retryAttempts?: number
  // 重试延迟
  retryDelay?: number
  // PrismaClient额外配置
  options?: Prisma.PrismaClientOptions
  // 连接工厂，自定义创建链接的逻辑
  connectionFactory?: (connection: any, providerName?: string) => any
  // 连接错误工厂，自定义处理连接错误的逻辑
  connectionErrorFactory?: (error: any) => any
}

export interface PrismaModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  // 异步注册时，指定 PrismaClient DI 注册名称
  name?: string
  // 异步注册时，指定使用哪个类来创建 PrismaClient
  useClass?: Type<PrismaOptionsFactory>
  // 异步注册时，指定使用哪个工厂函数来创建 PrismaClient
  useFactory?: (...args: any[]) => Promise<PrismaModuleFactoryOptions> | PrismaModuleFactoryOptions
  inject?: any[]
}

// 使用 useClass 时，需要实现该接口, createPrismaModuleOptions 函数最终返回数据库链接配置信息
export interface PrismaOptionsFactory {
  createPrismaModuleOptions(): Promise<PrismaModuleOptions> | PrismaModuleOptions
}

// 使用 useFactory 时的返回值类型，排除 providerName 字段。
// 因为 providerName 是用于指定 PrismaClient DI 注册名称的，在 useFactory 中不需要指定。
export type PrismaModuleFactoryOptions = Omit<PrismaModuleOptions, 'providerName'>
