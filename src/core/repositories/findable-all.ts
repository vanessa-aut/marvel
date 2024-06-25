export interface FindableAll<T, Options> {
  findAll(options: Options): Promise<T>
}
