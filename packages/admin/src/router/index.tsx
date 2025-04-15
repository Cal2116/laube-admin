import { StorageKey } from '@laube-admin/common'
import { message } from 'antd'
import { lazy } from 'react'
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom'

import { getStorageValue } from '@/utils'
import Login from '@/views/Login'

const checkLogin = () => {
  const accessToken = getStorageValue(StorageKey.ACCESS_TOKEN)

  return !!accessToken
}

const loginLoader = () => {
  const isLogin = checkLogin()

  if (isLogin) {
    return redirect('/')
  }

  return null
}

const protectedLoader = () => {
  const isLogin = checkLogin()

  if (!isLogin) {
    message.error('请先完成登录')
    return redirect('/login')
  }

  return null
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
  },
  {
    Component: lazy(() => import('@/views/Home')),
    loader: protectedLoader,
    children: [
      {
        path: '/',
        element: <Navigate to="/welcome" />,
      },
      {
        path: '/welcome',
        Component: lazy(() => import('@/views/Welcome')),
      },
    ],
  },
])

export default router
