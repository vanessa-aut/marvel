import { CharactersList } from '../features/characters/delivery/server/list/characters-list.page'
import { getCharactersQry, useCaseService } from '../core/service-locator/service-locator'
import { SearchBoxComponent } from '../core/delivery/search-box/search-box.component'

export default async function Home() {
  const characters = await useCaseService.execute(getCharactersQry)

  return (
    <>
      <SearchBoxComponent />
      <CharactersList characters={characters.results} />
    </>
  )
}
