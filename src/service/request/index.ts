import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { DDRequestConfig, DDRequestInterceptors } from './type'

const DEFAULT_LOADING = true

class DDRequest {
  instance: AxiosInstance
  interceptors?: DDRequestInterceptors
  loading?: ''
  showLoading: boolean

  // 构造器，对于一个axios实例来说，这个config实例级别的
  // 如果需要在具体请求上做文章，需将request携带的config属性覆盖实例属性
  constructor(config: DDRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        //请求成功全局拦截
        // console.log('请求成功全局拦截')
        //如果需要loading，在此处加载loading
        // if (this.showLoading) {
        //配置loading属性
        // this.loading = ElLoading.service(loadingOption)
        // }

        return config
      },
      (error) => {
        //请求失败全局拦截
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        //响应成功全局拦截
        // console.log('响应成功全局拦截')
        // 只取data
        return res.data
      },
      (error) => {
        //响应失败全局拦截
        // 这里可以remove loading
        // 当statusCode大于200时，响应的具体数据在response.data中
        return error.response.data
      }
    )
  }

  request<T>(config: DDRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        //此处是直接执行这个方法
        config = config.interceptors.requestInterceptor(config)
      }

      //2.判断是否需要显示loading
      // 如果request请求出配置showloading为false，则不加载
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //请求级别响应拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // console.log(res)
          //将showLoading设置为true
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

  put<T = any>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PUT'
    })
  }

  delete<T = any>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }

  patch<T = any>(config: DDRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
}

export default DDRequest
