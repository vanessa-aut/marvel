import { type FC } from 'react'
import { SearchBoxComponent } from '../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../list/characters-list.component'
import { getCharactersQry, useCaseService } from '../../../../core/service-locator/service-locator'

export const CharactersPageComponent: FC = async () => {
  const characters = await useCaseService.execute(getCharactersQry)

  return (
    <>
      <SearchBoxComponent />
      <CharactersList characters={characters.results} />
    </>
  )
}