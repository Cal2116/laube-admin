import { Layout as AntdLayout } from 'antd'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <AntdLayout className="h-screen w-screen">{children}</AntdLayout>
}
