import { Logger } from '../../logger/logger'
import { UseCase } from '../use-case'
import { UseCaseHandler } from '../use-case-handler'
import { LogMiddleware } from './log.middleware'

class MockLogger implements Logger {
  log = jest.fn()
}
class MockUseCase implements UseCase {
  handle = jest.fn().mockResolvedValue('result')
}
const mockUseCaseHandler = {
  useCase: new MockUseCase(),
  handle: jest.fn().mockResolvedValue('result'),
  middleware: [],
  options: {},
  constructor: { name: 'UseCaseHandler' },
} as unknown as UseCaseHandler

describe('LogMiddleware', () => {
  it('should call logger.log and useCase.handle with params', async () => {
    const mockLogger = new MockLogger()
    const mockUseCase = new MockUseCase()
    const middleware = new LogMiddleware(mockLogger)
    const params = { test: 'test' }
    const date = new Date().toISOString()

    jest.spyOn(global, 'Date').mockImplementation(
      () =>
        ({
          toISOString: () => date,
        }) as unknown as Date,
    )

    await middleware.intercept(params, mockUseCase)

    expect(mockLogger.log).toHaveBeenCalledWith(`[${date}] MockUseCase / ${JSON.stringify(params, null, 2)}`)
    expect(mockUseCase.handle).toHaveBeenCalledWith(params)
  })

  it('should get the correct name for UseCaseHandler', async () => {
    const mockLogger = new MockLogger()
    const middleware = new LogMiddleware(mockLogger)
    const params = { test: 'test' }
    const date = new Date().toISOString()

    jest.spyOn(global, 'Date').mockImplementation(
      () =>
        ({
          toISOString: () => date,
        }) as unknown as Date,
    )

    await middleware.intercept(params, mockUseCaseHandler)

    expect(mockLogger.log).toHaveBeenCalledWith(`[${date}] UseCaseHandler / ${JSON.stringify(params, null, 2)}`)
    expect(mockUseCaseHandler.handle).toHaveBeenCalledWith(params)
  })

  it('should get the correct name for a generic UseCase', async () => {
    const mockLogger = new MockLogger()
    const genericUseCase = {
      handle: jest.fn().mockResolvedValue('result'),
      constructor: { name: 'GenericUseCase' },
    } as UseCase
    const middleware = new LogMiddleware(mockLogger)
    const params = { test: 'test' }
    const date = new Date().toISOString()

    jest.spyOn(global, 'Date').mockImplementation(
      () =>
        ({
          toISOString: () => date,
        }) as unknown as Date,
    )

    await middleware.intercept(params, genericUseCase)

    expect(mockLogger.log).toHaveBeenCalledWith(`[${date}] GenericUseCase / ${JSON.stringify(params, null, 2)}`)
    expect(genericUseCase.handle).toHaveBeenCalledWith(params)
  })
})
