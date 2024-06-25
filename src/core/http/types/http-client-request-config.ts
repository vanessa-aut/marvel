import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

export type HttpClientRequestConfig<Data = unknown> = AxiosRequestConfig<Data>
export type HttpClientInternalRequestConfig<Data = unknown> = InternalAxiosRequestConfig<Data>
