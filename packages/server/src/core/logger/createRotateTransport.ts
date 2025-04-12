import { utilities } from 'nest-winston'
import * as Winston from 'winston'
import { MongoDB, MongoDBConnectionOptions } from 'winston-mongodb'

/**
 * 控制台日志 Transport
 */
export const consoleTransport = (appName: string) => {
  return new Winston.transports.Console({
    level: 'info',
    format: Winston.format.combine(Winston.format.timestamp(), utilities.format.nestLike(appName)),
  })
}

/**
 * MongoDB日志 Transport
 */
export const mongoTransport = (options: MongoDBConnectionOptions) => {
  return new MongoDB(options)
}
