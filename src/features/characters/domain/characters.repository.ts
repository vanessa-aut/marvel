import { FindableAll } from '../../../core/repositories/findable-all'
import { Character } from './character'
import { Findable } from '../../../core/repositories/findable'
import { ApiResponse } from '../../../core/http/api-response'

export interface CharactersRepository extends FindableAll<ApiResponse<Character>>, Findable<Character, number> {
  // TODO:  findComicsByCharacterId
}
