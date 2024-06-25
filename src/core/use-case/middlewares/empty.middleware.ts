import { Middleware } from './middleware'
import { UseCase } from '../use-case'

export class EmptyMiddleware implements Middleware {
  intercept(params: unknown, next: UseCase): Promise<unknown> {
    return next.handle(params)
  }
}
