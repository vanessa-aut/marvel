'use client'

import React, { type FC } from 'react'
import { Character, CharacterPrimitives } from '../../../domain/character'
import { CardInfoButtonComponent } from '../../components/card-info-button/card-info-button.component'

interface CharacterPageProps {
  character: CharacterPrimitives
}

export const CharacterPageComponent: FC<CharacterPageProps> = ({ character }) => {
  return (
    <>
      {character.name}
      <CardInfoButtonComponent character={Character.create(character)} />
    </>
  )
}
