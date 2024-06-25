import { Query } from '../../../core/use-case/query'
import { Character } from '../domain/character'
import { CharactersRepository } from '../domain/characters.repository'

export class GetCharacterByIdQry implements Query<Character, number> {
  constructor(private readonly charactersRepository: CharactersRepository) {}

  handle(id: number): Promise<Character> {
    return this.charactersRepository.find(id)
  }
}
