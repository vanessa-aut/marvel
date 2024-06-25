export interface ResourceListDto<Entity> {
  available: number
  returned: number
  collectionURI: string
  items: Entity[]
}
