import 'dayjs/locale/zh-cn'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import { themeConfig } from './utils/themeConfig'

export default function App() {
  return (
    <ConfigProvider locale={zhCN} theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
