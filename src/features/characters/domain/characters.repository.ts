import { FindableAll } from '../../../core/repositories/findable-all'
import { Character } from './character'
import { Findable } from '../../../core/repositories/findable'
import { ApiResponse } from '../../../core/http/api-response'
import { CharactersApiQry } from '../../../core/http/characters-api-qry'
import { Comic } from './comic'

export interface CharactersRepository
  extends FindableAll<ApiResponse<Character>, CharactersApiQry>,
    Findable<Character, number> {
  findComicsByCharacterId(id: number): Promise<ApiResponse<Comic>>
}
