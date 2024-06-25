import { EventEmitter } from '../../event-emitter/event-emitter'
import { Events } from '../../event-emitter/events'
import { UseCase } from '../use-case'
import { UseCaseOptions } from '../use-case-options'
import { Middleware } from './middleware'

export class ErrorMiddleware implements Middleware {
  constructor(private readonly eventEmitter: EventEmitter) {}

  async intercept(params: unknown, next: UseCase, options: UseCaseOptions): Promise<unknown> {
    try {
      const result = await next.handle(params)
      return result
    } catch (error) {
      if (!options.silentError) {
        this.eventEmitter.dispatch(Events.ERROR, error)
      }
      throw error
    }
  }
}
