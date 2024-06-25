import { UseCase } from './use-case'
import { Middleware } from './middlewares/middleware'
import { UseCaseHandler } from './use-case-handler'
import { UseCaseOptions } from './use-case-options'
import { emptyMiddleware } from '../service-locator/service-locator'

export class UseCaseService {
  constructor(private readonly middlewares: Middleware[]) {}

  async execute<In, Out>(useCase: UseCase<In, Out>, param?: In, options?: UseCaseOptions): Promise<Out> {
    const requiredOptions = options ?? {
      silentError: false,
    }

    let next = UseCaseHandler.create({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: useCase as any,
      options: requiredOptions,
      middleware: emptyMiddleware,
    })

    for (let i = this.middlewares.length - 1; i >= 0; i--) {
      const currentMiddleware = this.middlewares[i]
      const previous = next
      next = UseCaseHandler.create({ next: previous, middleware: currentMiddleware, options: requiredOptions })
    }

    return next.handle(param) as Promise<Out>
  }
}
