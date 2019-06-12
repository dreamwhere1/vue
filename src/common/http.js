import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

http.interceptors.request.use((req) => {
  Toast.loading({
    duration: 0,
    mask: true,
    message: '加载中...'
  })
  return req
})

http.interceptors.response.use((res) => {
  // console.log(res)
  if (res.status === 200) {
    Toast.clear({
      clearAll: true
    })
    if (document.getElementsByClassName('van-toast').length) {
      document.getElementsByClassName('van-toast')[0].remove()
    }
    return res.data
  } else {
    Toast.fail(res.statusText)
    return res.statusText
  }
})

export default http
