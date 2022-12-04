import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface DDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DDRequestInterceptors<T>
  showLoading?: boolean
}
