import { LoginRequest } from '@laube-admin/common'

import request from '@/utils/request'

export const login = (data: LoginRequest) => request.post('/auth/login', data)
