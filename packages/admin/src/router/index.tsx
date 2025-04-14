import { createBrowserRouter, Navigate } from 'react-router-dom'

import Home from '@/views/Home'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to="/welcome" />,
  },
  {
    element: <Home />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
    ],
  },
])

export default router
