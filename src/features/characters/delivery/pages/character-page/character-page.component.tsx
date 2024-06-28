import { type FC } from 'react'
import { Character } from '../../../domain/character'
import { CharacterDetailHeaderComponent } from '../../components/character-detail-header/character-detail-header.component'
import { ComicCarouselComponent } from '../../components/comic-carousel/comic-carousel.component'

interface CharacterPageProps {
  character: Character
}

export const CharacterPageComponent: FC<CharacterPageProps> = ({ character }) => {
  return (
    <>
      <CharacterDetailHeaderComponent character={character.toPrimitives()} />
      <ComicCarouselComponent />
    </>
  )
}
