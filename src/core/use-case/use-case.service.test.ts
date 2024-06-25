import { UseCaseService } from './use-case.service'
import { Query } from './query'
import { UseCase } from './use-case'

describe('UseCaseService', () => {
  it('should execute use cases', async () => {
    class TestUseCase implements Query<number> {
      async handle(): Promise<number> {
        return 42
      }
    }

    const useCaseService = new UseCaseService([])

    const actual = await useCaseService.execute(TestUseCase)

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

    await useCaseService.execute(TestUseCase)

    expect(called).toBe(true)
  })
})
