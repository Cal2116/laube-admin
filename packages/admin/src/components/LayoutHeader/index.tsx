import { Layout, Menu } from 'antd'

const { Header } = Layout

export default function LayoutHeader() {
  return (
    <Header className="shadow-md">
      <Menu mode="horizontal" items={[]} />
    </Header>
  )
}
