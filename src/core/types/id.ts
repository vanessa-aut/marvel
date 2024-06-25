export class Id {
  private constructor(readonly value: number) {}

  static create({ value }: { value: number }) {
    return new Id(value)
  }

  isEqual(id: Id) {
    return this.value === id.value
  }
}
