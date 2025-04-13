import { useEffect } from 'react'

import { login } from '@/api'

export default function App() {
  useEffect(() => {
    login({
      username: 'admin',
      password: '1234567',
    }).then(res => {
      console.log('🚀 ~ res:', res)
    })
  }, [])

  return <div>App</div>
}
