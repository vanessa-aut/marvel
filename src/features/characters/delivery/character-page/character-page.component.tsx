'use client'

import React, { type FC } from 'react'
import { Character, CharacterPrimitives } from '../../domain/character'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'

interface CharacterPageProps {
  character: CharacterPrimitives
}

export const CharacterPageComponent: FC<CharacterPageProps> = ({ character }) => {
  return (
    <>
      {character.name}
      <FavoriteButtonComponent character={Character.create(character)} />
    </>
  )
}
