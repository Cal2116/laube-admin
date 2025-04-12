import { Logger } from '@nestjs/common'
import { PrismaClient as MySqlClient } from 'prisma-mysql'
import { catchError, Observable, retry, throwError, timer } from 'rxjs'

export const getDbType = (url?: string): string => {
  const regex = /^(.*?):\/\//
  if (!url) {
    return ''
  }

  const matches = url.match(regex)
  return matches ? matches[1] : ''
}

export const getPrismaClient = (dbtype?: string) => {
  if (dbtype === 'mysql') {
    return MySqlClient
  }

  return null
}

export const retryConnect = (retryAttempts: number = 3, retryDelay: number = 1000) => {
  const logger = new Logger('Prisma')
  const retryAttemptsCount = retryAttempts < 0 ? Infinity : retryAttempts

  return (source: Observable<any>) => {
    return source.pipe(
      retry({
        count: retryAttemptsCount,
        delay: (error, retryCount) => {
          if (retryCount <= retryAttemptsCount) {
            logger.warn(`连接失败，正在重试${retryCount}次`)
            return timer(retryDelay)
          } else {
            return throwError(() => new Error('已达到最大重试次数'))
          }
        },
      }),
      catchError((error: any) => {
        logger.error(`数据库连接失败，已重试${retryAttemptsCount}次`, error.stack || error)
        return throwError(() => error)
      })
    )
  }
}
