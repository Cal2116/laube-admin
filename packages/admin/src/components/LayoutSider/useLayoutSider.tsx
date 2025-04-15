import { Icon } from '@iconify/react'
import { MenuInfo, MenuType } from '@laube-admin/common'
import { MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useMenuStore } from '@/store/useMenuStore'

type MenuItem = Required<MenuProps>['items'][number] & {
  children?: MenuItem[]
}

export const useLayoutSider = () => {
  const menus = useMenuStore(state => state.menus)
  const location = useLocation()

  useEffect(() => {
    getMenuItems()
  }, [menus])

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  const getMenuItems = () => {
    const processMenu = (menu: MenuInfo): MenuItem | null => {
      if (menu.type === MenuType.BUTTON) {
        return null
      }

      const result: MenuItem = {
        label: menu.name,
        key: menu.path || menu.id,
        icon: menu.icon ? (
          <Icon className="w-4 h-4" icon={menu.icon} />
        ) : undefined,
      }

      if (menu.children && menu.children.length > 0) {
        const children = menu.children
          .map(child => processMenu(child))
          .filter((item): item is MenuItem => item !== null)

        if (children.length > 0) {
          result.children = children
        }
      }

      return result
    }

    const items = menus
      .map(menu => processMenu(menu))
      .filter((item): item is MenuItem => item !== null)

    setMenuItems(items)
  }

  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const findMenuPath = (menus: MenuInfo[], targetPath: string): string[] => {
    for (const menu of menus) {
      if (menu.path === targetPath) {
        return [menu.id]
      }
      if (menu.children && menu.children.length > 0) {
        const childPath = findMenuPath(menu.children, targetPath)
        if (childPath.length > 0) {
          return [menu.id, ...childPath]
        }
      }
    }
    return []
  }

  useEffect(() => {
    const path = findMenuPath(menus, location.pathname)
    if (path.length > 0) {
      setSelectedKeys([path[path.length - 1]])
      setOpenKeys(path.slice(0, -1))
    }
  }, [location.pathname, menus])

  return {
    menuItems,
    openKeys,
    selectedKeys,
  }
}
