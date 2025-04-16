import { ResponseCode, ResponseShell, StorageKey } from '@laube-admin/common'
import { message } from 'antd'
import axios from 'axios'

import { clearStorage, getStorageValue } from './storage'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
  withCredentials: true,
})

request.interceptors.request.use(config => {
  const token = getStorageValue(StorageKey.ACCESS_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(
  response => {
    const responseShell = response.data as ResponseShell
    const responseData = responseShell.data

    if (responseShell.code === ResponseCode.SUCCESS) {
      return responseData
    }

    if (responseShell.code === ResponseCode.ERROR) {
      message.error(responseShell.message)
      return Promise.reject(responseShell)
    }

    if (responseShell.code === ResponseCode.UNAUTHORIZED) {
      message.error(responseShell.message)
      clearStorage()
      window.location.href = '/login'
      return Promise.reject(responseShell)
    }

    return Promise.reject(responseShell)
  },
  error => {
    message.error('服务器内部错误，请联系管理员')
    return Promise.reject(error)
  }
)

export default request
