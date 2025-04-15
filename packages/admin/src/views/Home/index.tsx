import { StorageKey } from '@laube-admin/common'
import { useEffect } from 'react'

import { getLoginUserInfo } from '@/api'
import Layout from '@/components/Layout'
import LayoutContent from '@/components/LayoutContent'
import LayoutSider from '@/components/LayoutSider'
import { useMenuStore } from '@/store/useMenuStore'
import { setStorageValue } from '@/utils'

export default function Home() {
  const setMenus = useMenuStore(state => state.setMenus)

  useEffect(() => {
    handleGetLoginUserInfo()
  }, [])

  const handleGetLoginUserInfo = async () => {
    const userInfoResponse = await getLoginUserInfo()
    const { menuTree, ...userInfo } = userInfoResponse

    setMenus(menuTree)
    setStorageValue(StorageKey.USER_INFO, userInfo)
  }

  return (
    <Layout>
      <LayoutSider />
      <LayoutContent />
    </Layout>
  )
}
