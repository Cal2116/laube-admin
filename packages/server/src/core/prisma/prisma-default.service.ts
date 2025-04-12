import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PrismaModuleOptions, PrismaOptionsFactory } from './prisma.interface'

/**
 * 默认的 Prisma 链接工厂
 */
@Injectable()
export class PrismaDefaultService implements PrismaOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createPrismaModuleOptions(): PrismaModuleOptions {
    const dbType = this.configService.get('DB_TYPE')
    const dbHost = this.configService.get('DB_HOST')
    const dbPort = this.configService.get('DB_PORT')
    const dbUser = this.configService.get('DB_USER')
    const dbPassword = this.configService.get('DB_PASSWORD')
    const dbDatabase = this.configService.get('DB_DATABASE')

    return {
      url: `${dbType}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`,
    }
  }
}
