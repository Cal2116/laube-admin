import { LoginParams, LoginResult } from '@laube-admin/common'

import { request } from '@/utils'

export const login = (data: LoginParams): Promise<LoginResult> =>
  request.post('/auth/login', data)
