import { EnableStatus, MenuType } from '../enums'

export interface MenuInfo {
  id: string
  type: MenuType
  name: string
  parentId: string
  path: string
  component: string
  order: number
  status: EnableStatus
  icon: string
  children?: MenuInfo[]
}
