import { Query } from '../../../core/use-case/query'
import { Character } from '../domain/character'
import { CharactersRepository } from '../domain/characters.repository'
import { ApiResponse } from '../../../core/http/api-response'

export class GetCharactersQry implements Query<ApiResponse<Character>> {
  constructor(private readonly charactersRepository: CharactersRepository) {}

  handle(): Promise<ApiResponse<Character>> {
    return this.charactersRepository.findAll()
  }
}
