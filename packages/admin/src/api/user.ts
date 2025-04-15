import { LoginUserInfo } from '@laube-admin/common'

import { request } from '@/utils/index'

export const getUserInfo = (): Promise<LoginUserInfo> => {
  return request.get('/system/user/info')
}
