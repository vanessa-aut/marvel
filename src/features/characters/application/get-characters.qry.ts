import { Query } from '../../../core/use-case/query'
import { Character } from '../domain/character'
import { CharactersRepository } from '../domain/characters.repository'
import { ApiResponse } from '../../../core/http/api-response'
import { CharactersApiQry } from '../../../core/http/characters-api-qry'

export class GetCharactersQry implements Query<ApiResponse<Character>, object> {
  constructor(private readonly charactersRepository: CharactersRepository) {}

  handle(options: CharactersApiQry): Promise<ApiResponse<Character>> {
    return this.charactersRepository.findAll(options)
  }
}
