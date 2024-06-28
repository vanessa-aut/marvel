import { ResourceListDto } from './resource-list.dto'
import { ResourceSummaryDto } from './resource-summary.dto'

interface ImageDto {
  path: string
  extension: string
}
interface TextObjectDto {
  type: string
  language: string
  text: string
}
interface UrlDto {
  type: string
  url: string
}
interface DateDto {
  type: string
  date: string
}
interface ComicPriceDto {
  type: string
  price: number
}

export interface ComicDto {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamond: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObjectDto[]
  resourceURI: string
  urls: UrlDto[]
  series: ResourceSummaryDto
  variants: ResourceSummaryDto[]
  collections: ResourceSummaryDto[]
  collectedIssues: ResourceSummaryDto[]
  dates: DateDto[]
  prices: ComicPriceDto[]
  thumbnail: ImageDto
  images: ImageDto[]
  creators: ResourceListDto<unknown>
  characters: ResourceListDto<unknown>
  stories: ResourceListDto<unknown>
  events: ResourceListDto<unknown>
}
