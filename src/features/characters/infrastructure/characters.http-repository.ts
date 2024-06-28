import { CharactersRepository } from '../domain/characters.repository'
import { HttpClient } from '../../../core/http/http-client'
import { Character } from '../domain/character'
import { MarvelApiResponse } from '../../../core/http/marvel-api-response'
import { CharacterDto } from './character.dto'
import { CharacterDtoMapper } from './character-dto.mapper'
import { ApiResponse } from '../../../core/http/api-response'
import { CharactersApiQry } from '../../../core/http/characters-api-qry'
import { ComicDtoMapper } from './comic-dto.mapper'
import { Comic } from '../domain/comic'
import { ComicDto } from './comic.dto'

export class CharactersHttpRepository implements CharactersRepository {
  static url = 'characters'

  private defaultCharactersQry: CharactersApiQry = {
    limit: 50,
  }

  private defaultComicsQry: CharactersApiQry = {
    limit: 20,
  }

  constructor(
    private readonly httpClient: HttpClient,
    private readonly characterDtoMapper: CharacterDtoMapper,
    private readonly comicDtoMapper: ComicDtoMapper,
  ) {}

  async find(id: number): Promise<Character> {
    const characterByIdUrl = `${CharactersHttpRepository.url}/${id}`
    const characterDto = await this.httpClient.get<MarvelApiResponse<CharacterDto>>(characterByIdUrl)
    return this.characterDtoMapper.map(characterDto.data.data.results[0])
  }

  async findAll(options: CharactersApiQry): Promise<ApiResponse<Character>> {
    const queryOptions = { ...this.defaultCharactersQry, ...options }
    const queryParams = new URLSearchParams(queryOptions as Record<string, string>).toString()
    const url = `${CharactersHttpRepository.url}?${queryParams}`
    const response = await this.httpClient.get<MarvelApiResponse<CharacterDto>>(url)

    return {
      total: response.data.data.total,
      results: response.data.data.results.map(this.characterDtoMapper.map),
    }
  }

  async findComicsByCharacterId(id: number): Promise<ApiResponse<Comic>> {
    const queryOptions = { ...this.defaultComicsQry }
    const queryParams = new URLSearchParams(queryOptions as Record<string, string>).toString()
    const comicsByCharacterIdUrl = `${CharactersHttpRepository.url}/${id}/comics?${queryParams}`
    const response = await this.httpClient.get<MarvelApiResponse<ComicDto>>(comicsByCharacterIdUrl)

    return {
      total: response.data.data.total,
      results: response.data.data.results.map(this.comicDtoMapper.map),
    }
  }
}
