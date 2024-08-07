import { UseCase } from './use-case'
import { Middleware } from './middlewares/middleware'
import { UseCaseHandler } from './use-case-handler'
import { UseCaseOptions } from './use-case-options'
import { EmptyMiddleware } from './middlewares/empty.middleware'

export class UseCaseService {
  constructor(private readonly middlewares: Middleware[]) {}

  async execute<In, Out>(useCase: UseCase<In, Out>, param?: In, options?: UseCaseOptions): Promise<Out> {
    const requiredOptions = options ?? {
      silentError: false,
    }

    let next = UseCaseHandler.create({
      next: useCase as any,
      options: requiredOptions,
      middleware: new EmptyMiddleware(),
    })

    for (let i = this.middlewares.length - 1; i >= 0; i--) {
      const currentMiddleware = this.middlewares[i]
      const previous = next
      next = UseCaseHandler.create({ next: previous, middleware: currentMiddleware, options: requiredOptions })
    }

    return (await next.handle(param)) as Promise<Out>
  }
}
