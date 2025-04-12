import * as dayjs from 'dayjs'
import { utilities } from 'nest-winston'
import * as Winston from 'winston'

/**
 * 控制台日志 Transport
 */
export const consoleTransport = (appName: string, logLevel: string) => {
  return new Winston.transports.Console({
    level: logLevel,
    format: Winston.format.combine(Winston.format.timestamp(), utilities.format.nestLike(appName)),
  })
}

/**
 * 每日文件日志 Transport
 *
 * @description 每天生成一个日志文件，文件名由年月日组成，日志文件存放在环境变量配置的指定目录下
 */
export const dailyFileTransport = (appName: string, logLevel: string, logDir: string) => {
  const today = dayjs().format('YYYY-MM-DD')

  return new Winston.transports.File({
    level: logLevel,
    filename: `${logDir}/${appName}-${today}.log`,
    dirname: logDir,
    format: Winston.format.combine(Winston.format.timestamp(), utilities.format.nestLike(appName)),
  })
}
