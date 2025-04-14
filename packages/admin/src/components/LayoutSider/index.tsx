import { Layout } from 'antd'

const { Sider } = Layout

export default function LayoutSider() {
  return (
    <Sider theme="light" width={200} className="shadow-md">
      <div className="w-full h-16 flex items-center justify-center gap-2">
        <img
          className="w-6 h-6"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="logo"
        />
        <span className="text-lg font-bold">LaubeAdmin</span>
      </div>
    </Sider>
  )
}
