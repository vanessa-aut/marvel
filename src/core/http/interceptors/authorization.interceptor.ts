import { HttpClient } from '../http-client'
import { HttpClientInternalRequestConfig } from '../types/http-client-request-config'
import { Interceptor } from './interceptor'
import type { Environment } from '../../environment/environment'
import md5 from 'md5'

export class AuthorizationInterceptor extends Interceptor {
  constructor(
    httpClient: HttpClient,
    private readonly environment: Environment,
  ) {
    super(httpClient)
  }

  initInterceptor(): void {
    this.httpClient.addRequestInterceptor({
      onFulfilled: config => this.setAuthorizationParam(config),
    })
  }

  private setAuthorizationParam(config: HttpClientInternalRequestConfig): HttpClientInternalRequestConfig {
    const ts = new Date().toTimeString()
    config.params = {}
    config.params.apikey = this.environment.marvelApiPublicKey
    config.params.hash = this.generateHash(ts)
    config.params.ts = ts

    return config
  }

  private generateHash = (ts: string):string => {
    const publicKey = this.environment.marvelApiPublicKey
    const privateKey = this.environment.marvelApiPrivateKey

    return md5(`${ts}${privateKey}${publicKey}`)
  }
}
