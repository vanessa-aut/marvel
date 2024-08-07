import { CharactersHttpRepository } from '../../features/characters/infrastructure/characters.http-repository'
import { HttpClient } from '../http/http-client'
import { CharacterDtoMapper } from '../../features/characters/infrastructure/character-dto.mapper'
import { Mode } from '../environment/mode'
import { GetCharactersQry } from '../../features/characters/application/get-characters.qry'
import { UseCaseService } from '../use-case/use-case.service'
import { ErrorMiddleware } from '../use-case/middlewares/error.middleware'
import { EventEmitter } from '../event-emitter/event-emitter'
import { LogMiddleware } from '../use-case/middlewares/log.middleware'
import { AuthorizationInterceptor } from '../http/interceptors/authorization.interceptor'
import { GetCharacterByIdQry } from '../../features/characters/application/get-character-by-id.qry'
import { GetComicsByCharacterIdQry } from '../../features/characters/application/get-comics-by-character-id.qry'
import { ComicDtoMapper } from '../../features/characters/infrastructure/comic-dto.mapper'

const environment = {
  mode: process.env.NODE_ENV as Mode,
  marvelApiPublicKey: process.env.MARVEL_API_PUBLIC_KEY as string,
  marvelApiUrl: process.env.MARVEL_API_URL as string,
  marvelApiPrivateKey: process.env.MARVEL_API_PRIVATE_KEY as string,
}
const httpClient = new HttpClient(environment)
new AuthorizationInterceptor(httpClient, environment).initInterceptor()

const charactersHttpRepository = new CharactersHttpRepository(
  httpClient,
  new CharacterDtoMapper(),
  new ComicDtoMapper(),
)
export const getCharactersQry = new GetCharactersQry(charactersHttpRepository)
export const getCharacterByIdQry = new GetCharacterByIdQry(charactersHttpRepository)
export const getComicsByCharacterIdQry = new GetComicsByCharacterIdQry(charactersHttpRepository)
export const useCaseService = new UseCaseService([new ErrorMiddleware(new EventEmitter()), new LogMiddleware(console)])
