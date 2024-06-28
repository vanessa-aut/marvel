import { Query } from '../../../core/use-case/query'
import { CharactersRepository } from '../domain/characters.repository'
import { Comic } from '../domain/comic'
import { ApiResponse } from '../../../core/http/api-response'

export class GetComicsByCharacterIdQry implements Query<ApiResponse<Comic>, number> {
  constructor(private readonly charactersRepository: CharactersRepository) {}

  handle(id: number): Promise<ApiResponse<Comic>> {
    return this.charactersRepository.findComicsByCharacterId(id)
  }
}
