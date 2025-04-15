import { EnableStatus } from '../enums'
import { MenuInfo } from './menu'

export interface UserInfo {
  id: string
  username: string
  nickname: string
  avatar: string
  email: string
  phone: string
  status: EnableStatus
}

export interface LoginUserInfo extends UserInfo {
  menuTree: MenuInfo[]
}
