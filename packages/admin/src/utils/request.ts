import { ResponseCode, ResponseShell } from '@laube-admin/common'
import { message } from 'antd'
import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
  withCredentials: true,
})

request.interceptors.request.use(config => {
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

    return Promise.reject(responseShell)
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
