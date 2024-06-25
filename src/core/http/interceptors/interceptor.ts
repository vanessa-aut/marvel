import { HttpClient } from '../http-client'

export abstract class Interceptor {
  constructor(protected httpClient: HttpClient) {}

  abstract initInterceptor(sessionExpiredCb: () => Promise<void>): void
}
