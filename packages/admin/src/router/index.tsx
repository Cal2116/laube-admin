import { createBrowserRouter } from 'react-router-dom'

import Login from '@/views/Login'
import Welcome from '@/views/Welcome'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Welcome />,
  },
])

export default router
