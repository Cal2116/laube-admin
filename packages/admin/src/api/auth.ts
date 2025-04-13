import { LoginRequest, LoginResponse } from '@laube-admin/common'

import { request } from '@/utils'

export const login = (data: LoginRequest): Promise<LoginResponse> =>
  request.post('/auth/login', data)
