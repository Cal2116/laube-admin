import { MenuInfo } from '@laube-admin/common'
import { Menu } from 'prisma/client/mysql'

export const generateMenuTree = (allMenus: Menu[]) => {
  const menuMap = new Map()
  const rootMenus: MenuInfo[] = []

  allMenus.forEach(menu => {
    menuMap.set(menu.id, {
      ...menu,
      children: menu.type === 'button' ? undefined : [],
    })
  })

  allMenus.forEach(menu => {
    const menuNode = menuMap.get(menu.id)

    if (!menu.parentId) {
      rootMenus.push(menuNode)
    } else {
      const parentNode = menuMap.get(menu.parentId)
      if (parentNode) {
        parentNode.children.push(menuNode)
      }
    }
  })

  const sortedRootMenus = sortMenuChildren(rootMenus)
  return sortedRootMenus
}

export const sortMenuChildren = (menus: MenuInfo[]) => {
  menus.forEach(menu => {
    if (menu.children && menu.children.length > 0) {
      menu.children.sort((a, b) => a.order - b.order)
      sortMenuChildren(menu.children)
    }
  })
  return menus
}
