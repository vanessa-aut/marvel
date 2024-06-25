export interface MarvelApiResponse<Entity> {
  code: number
  status: string
  etag: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: Entity[]
  }
}
