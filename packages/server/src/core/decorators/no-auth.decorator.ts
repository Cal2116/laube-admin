import { SetMetadata } from '@nestjs/common'

export const NO_AUTH = 'no-auth'

/**
 * 无需认证
 *
 * @description 用于标记接口无需认证
 */
export const NoAuth = () => SetMetadata(NO_AUTH, true)
