import { getCharacterByIdQry, useCaseService } from '../../../core/service-locator/service-locator'
import { CharacterPageComponent } from '../../../features/characters/delivery/character-page/character-page.component'

interface PageProps {
  params: {
    id: number
  }
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = params
  const character = await useCaseService.execute(getCharacterByIdQry, id)

  return (
    <div>
      <CharacterPageComponent character={character.toPrimitives()} />
    </div>
  )
}
