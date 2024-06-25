import { LogMiddleware } from './log.middleware'
import { capture, instance, mock } from '@typestrong/ts-mockito'
import { Logger } from '../../logger/logger'
import { UseCase } from '../use-case'
import { UseCaseHandler } from '../use-case-handler'

describe('LogMiddleware', () => {
  it('should log information from an use case', async () => {
    const { logMiddleware, logger, useCase } = setup()

    await logMiddleware.intercept(1, useCase)

    const [actual] = capture(logger.log).last()
    expect(actual).toEqual(`[2023-03-31T12:34:56.000Z] TestUseCase / 1`)
  })

  it('should log information from an use case handler', async () => {
    const { logMiddleware, logger, useCase } = setup()

    await logMiddleware.intercept(
      1,
      UseCaseHandler.create({ next: useCase, options: { silentError: false }, middleware: logMiddleware }),
    )

    const [actual] = capture(logger.log).last()
    expect(actual).toEqual(`[2023-03-31T12:34:56.000Z] TestUseCase / 1`)
  })
})

function setup() {
  const logger = mock<Logger>()
  const logMiddleware = new LogMiddleware(instance(logger))

  class TestUseCase implements UseCase {
    async handle(): Promise<unknown> {
      return
    }
  }

  return {
    logger,
    logMiddleware,
    useCase: new TestUseCase(),
  }
}
