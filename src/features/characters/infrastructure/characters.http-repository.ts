import { CharactersRepository } from '../domain/characters.repository'
import { HttpClient } from '../../../core/http/http-client'
import { Character } from '../domain/character'
import { MarvelApiResponse } from '../../../core/http/marvel-api-response'
import { CharacterDto } from './character.dto'
import { CharacterDtoMapper } from './character-dto.mapper'
import { ApiResponse } from '../../../core/http/api-response'

export class CharactersHttpRepository implements CharactersRepository {
  static url = 'characters'
  constructor(
    private readonly httpClient: HttpClient,
    private readonly characterDtoMapper: CharacterDtoMapper,
  ) {}

  async find(id: number): Promise<Character> {
    const characterByIdUrl = `${CharactersHttpRepository.url}/${id}`
    const characterDto = await this.httpClient.get<MarvelApiResponse<CharacterDto>>(characterByIdUrl)
    return this.characterDtoMapper.map(characterDto.data.data.results[0])
  }

  async findAll(options: void): Promise<ApiResponse<Character>> {
    const response = await this.httpClient.get<MarvelApiResponse<CharacterDto>>(CharactersHttpRepository.url)

    return {
      total: response.data.data.total,
      results: response.data.data.results.map(this.characterDtoMapper.map),
    }
  }
}
