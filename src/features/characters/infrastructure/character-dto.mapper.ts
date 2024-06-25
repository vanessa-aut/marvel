import { CharacterDto } from './character.dto'
import { Character } from '../domain/character'

export class CharacterDtoMapper {
  map(characterDto: CharacterDto): Character {
    return Character.create({
      id: characterDto.id,
      name: characterDto.name,
      image: `${characterDto.thumbnail.path}.${characterDto.thumbnail.extension}`,
      description: characterDto.description,
    })
  }
}
