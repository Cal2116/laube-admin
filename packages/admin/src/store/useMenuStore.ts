import { MenuInfo } from '@laube-admin/common'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface MenuStoreState {
  menus: MenuInfo[]
}

interface MenuStoreAction {
  setMenus: (menus: MenuInfo[]) => void
}

export const useMenuStore = create<MenuStoreState & MenuStoreAction>()(
  immer(draft => ({
    menus: [],
    setMenus: (menus: MenuInfo[]) => {
      draft(state => {
        state.menus = menus
      })
    },
  }))
)
