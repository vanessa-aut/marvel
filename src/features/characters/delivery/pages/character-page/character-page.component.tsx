import React, { type FC } from 'react'
import { CharacterPrimitives } from '../../../domain/character'
import { CharacterDetailHeaderComponent } from '../../components/character-detail-header/character-detail-header.component'
import { ComicCarouselComponent } from '../../components/comic-carousel/comic-carousel.component'

interface CharacterPageProps {
  character: CharacterPrimitives
}

export const CharacterPageComponent: FC<CharacterPageProps> = ({ character }) => {
  return (
    <>
      <CharacterDetailHeaderComponent character={character} />
      <ComicCarouselComponent />
    </>
  )
}
