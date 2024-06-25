import axios, { AxiosInstance } from 'axios'
import { HttpClientError } from './types/http-client-error'
import { HttpClientInternalRequestConfig, HttpClientRequestConfig } from './types/http-client-request-config'
import { HttpClientResponse } from './types/http-client-response'
import { Environment } from '../environment/environment'
import { HttpClientInterceptorOptions } from './types/interceptor-options.type'

export type HttpRequestInterceptor = {
  onFulfilled: (
    value: HttpClientInternalRequestConfig,
  ) => HttpClientInternalRequestConfig | Promise<HttpClientInternalRequestConfig>
  onRejected?: (error: HttpClientError) => unknown
  options?: HttpClientInterceptorOptions
}

export type HttpResponseInterceptor = {
  onFulfilled?: (value: HttpClientResponse) => HttpClientResponse | Promise<HttpClientResponse>
  onRejected?: (error: HttpClientError) => unknown
  options?: HttpClientInterceptorOptions
}

export class HttpClient {
  private _httpInstance: AxiosInstance

  constructor(private readonly environment: Environment) {
    this._httpInstance = axios.create({
      timeout: 10_000,
      withCredentials: true,
      baseURL: this.environment.marvelApiUrl,
    })
  }

  async get<Result, Data = unknown>(
    path: string,
    config?: HttpClientRequestConfig<Data>,
  ): Promise<HttpClientResponse<Result>> {
    return await this._httpInstance.get<Result, HttpClientResponse<Result>, Data>(path, config)
  }

  async post<Result, Data = unknown>(
    path: string,
    data?: Data,
    config?: HttpClientRequestConfig<Data>,
  ): Promise<HttpClientResponse<Result>> {
    return await this._httpInstance.post<Result, HttpClientResponse<Result>, Data>(path, data, config)
  }

  async put<Result, Data = unknown>(
    path: string,
    data?: Data,
    config?: HttpClientRequestConfig<Data>,
  ): Promise<HttpClientResponse<Result>> {
    return await this._httpInstance.put<Result, HttpClientResponse<Result>, Data>(path, data, config)
  }

  async delete<Result = unknown, Data = unknown>(
    path: string,
    config?: HttpClientRequestConfig<Data>,
  ): Promise<HttpClientResponse<Result>> {
    return await this._httpInstance.delete<Result, HttpClientResponse<Result>, Data>(path, config)
  }

  async patch<Result, Data = unknown>(
    path: string,
    data?: Data,
    config?: HttpClientRequestConfig<Data>,
  ): Promise<HttpClientResponse<Result>> {
    return await this._httpInstance.patch<Result, HttpClientResponse<Result>, Data>(path, data, config)
  }

  addRequestInterceptor(interceptor: HttpRequestInterceptor): void {
    this._httpInstance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
  }

  addResponseInterceptor(interceptor: HttpResponseInterceptor): void {
    this._httpInstance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
  }

  static isHttpError = (payload: unknown): payload is HttpClientError => {
    return axios.isAxiosError(payload)
  }
}
