//service统一出口
import DDRequest from '@/service/request'
import localCache from '@/utils/cache'

const ddRequest: DDRequest = new DDRequest({
  baseURL: (window as any).custom.base_url,
  timeout: (window as any).custom.timeout,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('实例请求拦截成功！')
      //携带token拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (res) => {
      // console.log(res)
      return res
    }
  }
})

export default ddRequest
