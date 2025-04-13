import * as dayjs from 'dayjs'
import { utilities } from 'nest-winston'
import * as Winston from 'winston'

export const consoleTransport = (appName: string, logLevel: string) => {
  return new Winston.transports.Console({
    level: logLevel,
    format: Winston.format.combine(Winston.format.timestamp(), utilities.format.nestLike(appName)),
  })
}

export const dailyFileTransport = (appName: string, logLevel: string, logDir: string) => {
  const today = dayjs().format('YYYY-MM-DD')

  return new Winston.transports.File({
    level: logLevel,
    filename: `${logDir}/${appName}-${today}.log`,
    dirname: logDir,
    format: Winston.format.combine(Winston.format.timestamp(), utilities.format.nestLike(appName)),
  })
}
