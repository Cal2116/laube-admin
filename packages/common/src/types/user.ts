import { EnableStatus } from '../enums'
import { MenuInfo } from './menu'

export interface UserInfo {
  id: string
  username: string
  phone: string | null
  email: string | null
  status: EnableStatus
}

export interface LoginUserInfo extends UserInfo {
  menuTree: MenuInfo[]
}
