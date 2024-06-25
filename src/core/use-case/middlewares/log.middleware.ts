import { Middleware } from './middleware'
import { Logger } from '../../logger/logger'
import { UseCaseHandler } from '../use-case-handler'
import { UseCase } from '../use-case'

export class LogMiddleware implements Middleware {
  constructor(private readonly logger: Logger) {}

  intercept(params: unknown, useCase: UseCase): Promise<unknown> {
    this.logger.log(`[${new Date().toISOString()}] ${this.getName(useCase)} / ${this.printResult(params)}`)
    return useCase.handle(params)
  }

  private getName(useCase: UseCase<unknown, unknown>) {
    if (useCase instanceof UseCaseHandler) {
      return useCase.useCase.constructor.name
    }

    return useCase.constructor.name
  }

  private printResult(result: unknown) {
    return JSON.stringify(result, null, 2)
  }
}
