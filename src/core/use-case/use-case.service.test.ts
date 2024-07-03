import { UseCaseService } from './use-case.service'
import { Query } from './query'
import { UseCase } from './use-case'
import { EmptyMiddleware } from './middlewares/empty.middleware'

class TestUseCase implements Query<number> {
  async handle(): Promise<number> {
    return 42
  }
}

describe('UseCaseService', () => {
  it('should execute use cases', async () => {
    const useCaseService = new UseCaseService([new EmptyMiddleware()])

    const actual = await useCaseService.execute(new TestUseCase())

    expect(actual).toBe(42)
  })

  it('should run through middleware', async () => {
    class TestUseCase implements Query<number> {
      async handle(): Promise<number> {
        return 42
      }
    }

    let called = false
    const useCaseService = new UseCaseService([
      {
        intercept(params: unknown, next: UseCase): Promise<unknown> {
          called = true
          return next.handle(params)
        },
      },
    ])

    await useCaseService.execute(new TestUseCase())

    expect(called).toBe(true)
  })
})
