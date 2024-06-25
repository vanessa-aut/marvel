import { AxiosResponse } from 'axios'

export type HttpClientResponse<Result = unknown, Data = unknown> = AxiosResponse<Result, Data>
