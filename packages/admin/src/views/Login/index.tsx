import { StorageKey } from '@laube-admin/common'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '@/api'
import loginBg from '@/assets/images/login-bg.jpg'
import { setStorageValue } from '@/utils'

type LoginForm = {
  username: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit: FormProps<LoginForm>['onFinish'] = async values => {
    try {
      setIsLoading(true)

      const res = await login(values)
      const { accessToken } = res

      setStorageValue(StorageKey.ACCESS_TOKEN, accessToken)
      navigate('/')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white h-screen w-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">欢迎登录</p>

            <Form
              onFinish={handleFormSubmit}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              autoComplete="off"
            >
              <Form.Item<LoginForm>
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>

              <Form.Item<LoginForm>
                name="password"
                label="密码"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>

              <Form.Item label={null} wrapperCol={{ offset: 4, span: 20 }}>
                <Button type="primary" htmlType="submit" block loading={isLoading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" src={loginBg} />
        </div>
      </div>
    </div>
  )
}
