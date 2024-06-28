import { ComicDto } from './comic.dto'
import { Comic } from '../domain/comic'

export class ComicDtoMapper {
  map(comicDto: ComicDto): Comic {
    return Comic.create({
      id: comicDto.id,
      title: comicDto.title,
      image: `${comicDto.thumbnail.path}.${comicDto.thumbnail.extension}`,
      date: comicDto.dates[0].date, // TBD
    })
  }
}
