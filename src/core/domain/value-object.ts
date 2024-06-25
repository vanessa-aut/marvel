export abstract class ValueObject<T> {
  protected constructor(readonly value: T) {}
}
