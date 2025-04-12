import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

import { loadYamlConfig } from './utils'

/**
 * 配置模块
 *
 * @description 根据环境变量加载配置文件，使用时在构造函数中注入 ConfigService
 */
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [loadYamlConfig],
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
