import { Layout, Menu } from 'antd'

import { useLayoutSider } from './useLayoutSider'

const { Sider } = Layout
import classNames from 'classnames'

import styles from './index.module.less'
export default function LayoutSider() {
  const { menuItems, openKeys, selectedKeys } = useLayoutSider()

  return (
    <Sider
      theme="dark"
      width={200}
      className={classNames('shadow-md', styles.container)}
    >
      <div className="w-full h-16 flex items-center justify-center gap-2">
        <img
          className="w-6 h-6"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="logo"
        />
        <span className="text-lg text-white font-bold">LaubeAdmin</span>
      </div>

      <Menu
        mode="inline"
        theme="dark"
        items={menuItems}
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectedKeys}
      />
    </Sider>
  )
}
