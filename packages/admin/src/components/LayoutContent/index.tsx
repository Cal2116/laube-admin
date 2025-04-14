import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import LayoutHeader from '../LayoutHeader'

const { Content } = Layout

export default function LayoutContent() {
  return (
    <Layout>
      <LayoutHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}
