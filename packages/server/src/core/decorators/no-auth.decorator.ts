import { SetMetadata } from '@nestjs/common'

export const NO_AUTH = 'no-auth'

export const NoAuth = () => SetMetadata(NO_AUTH, true)
