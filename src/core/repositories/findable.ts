export interface Findable<T, Options = void> {
  find(options: Options): Promise<T>
}
