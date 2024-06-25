import { ResourceListDto } from './resource-list.dto'

interface ThumbnailDto {
  path: string
  extension: string
}

export interface CharacterDto {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: string[]
  thumbnail: ThumbnailDto
  comics: ResourceListDto<unknown>
  stories: ResourceListDto<unknown>
  events: ResourceListDto<unknown>
  series: ResourceListDto<unknown>
}
