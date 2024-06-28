import { type FC } from 'react'
import { Character } from '../../../domain/character'
import { CharacterDetailHeaderComponent } from '../../components/character-detail-header/character-detail-header.component'
import { ComicCarouselComponent } from '../../components/comic-carousel/comic-carousel.component'
import { Comic } from '../../../domain/comic'

interface CharacterPageProps {
  character: Character
  comics: Comic[]
}

export const CharacterPageComponent: FC<CharacterPageProps> = ({ character, comics }) => {
  return (
    <>
      <CharacterDetailHeaderComponent character={character.toPrimitives()} />
      <ComicCarouselComponent comics={comics} />
    </>
  )
}
