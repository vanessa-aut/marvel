import { EmptyMiddleware } from './empty.middleware'
import { UseCase } from '../use-case'

class MockUseCase implements UseCase {
  handle = jest.fn((params: unknown) => Promise.resolve(params))
}

describe('EmptyMiddleware', () => {
  it('should call next.handle with the same parameters', async () => {
    const emptyMiddleware = new EmptyMiddleware()
    const mockUseCase = new MockUseCase()
    const params = { test: 'test' }

    const result = await emptyMiddleware.intercept(params, mockUseCase)

    expect(mockUseCase.handle).toHaveBeenCalledWith(params)
    expect(result).toBe(params)
  })
})
