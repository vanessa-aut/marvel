import {
  getCharacterByIdQry,
  getComicsByCharacterIdQry,
  useCaseService,
} from '../../../core/service-locator/service-locator'
import { CharacterPageComponent } from '../../../features/characters/delivery/pages/character-page/character-page.component'

interface PageProps {
  params: {
    id: number
  }
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = params
  const character = await useCaseService.execute(getCharacterByIdQry, id)
  const comics = await useCaseService.execute(getComicsByCharacterIdQry, id)

  return (
    <div>
      <CharacterPageComponent character={character} comics={comics.results} />
    </div>
  )
}
