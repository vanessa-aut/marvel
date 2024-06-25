import { type FC } from 'react'
import { SearchBoxComponent } from '../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../list/characters-list.component'
import { getCharactersQry, useCaseService } from '../../../../core/service-locator/service-locator'
import { CharactersApiQry } from '../../../../core/http/characters-api-qry'

export const CharactersPageComponent: FC = async () => {
  const params: CharactersApiQry = {}
  const characters = await useCaseService.execute(getCharactersQry, params)

  return (
    <>
      <SearchBoxComponent />
      <CharactersList characters={characters.results} />
    </>
  )
}
