import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import Login from '@/views/Login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    Component: lazy(() => import('@/views/Home')),
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
