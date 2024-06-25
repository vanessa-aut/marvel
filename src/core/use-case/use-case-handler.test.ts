import { UseCaseHandler } from './use-case-handler'
import { UseCase } from './use-case'
import { Middleware } from './middlewares/middleware'

describe('UseCaseHandler', () => {
  it('should handle use case', async () => {
    const next: UseCase = jest.fn() as unknown as UseCase
    const middleware: Middleware = {
      intercept: async () => 'foo',
    } as Middleware
    const useCaseHandler = UseCaseHandler.create({
      next,
      middleware,
      options: {
        silentError: false,
      },
    })

    const actual = await useCaseHandler.handle({ foo: 'foo' })

    expect(actual).toEqual('foo')
  })
})
