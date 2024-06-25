import { getCharacterByIdQry, useCaseService } from '../../../core/service-locator/service-locator'

interface PageProps {
  params: {
    id: number
  }
}

const CharacterPage = async ({ params }: PageProps) => {
  const { id } = params
  const character = await useCaseService.execute(getCharacterByIdQry, id)

  // TODO: aaaa
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default CharacterPage
