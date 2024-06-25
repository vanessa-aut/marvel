import { EmptyMiddleware } from './empty.middleware'
import { UseCase } from '../use-case'
import { mock } from 'jest-mock-extended'

describe('EmptyMiddleware', () => {
  it('should do nothing', () => {
    const emptyMiddleware = new EmptyMiddleware()
    const next = mock<UseCase>()

    emptyMiddleware.intercept(1, next)

    expect(next.handle).toHaveBeenCalledWith(1)
  })
})
