import { LoginRequest } from '@laube-admin/common'

import { request } from '@/utils'

export const login = (data: LoginRequest) => request.post('/auth/login', data)
