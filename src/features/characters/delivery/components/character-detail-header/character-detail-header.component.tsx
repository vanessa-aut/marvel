'use client'

import React, { type FC } from 'react'
import { CharacterPrimitives } from '../../../domain/character'
import styles from './character-detail-header.module.scss'

interface CharacterPageProps {
  character: CharacterPrimitives
}

export const CharacterDetailHeaderComponent: FC<CharacterPageProps> = ({ character }) => {
  return (
    <>
      <header className={styles['detail-header']}>
        <div className={styles['detail-header__wrapper']}>
          <div className={styles['character-photo']}>
            <img className={styles['character-photo__img']} src={character.image} alt={`Image of ${character.name}`} />
          </div>
          <div className={styles['character-info']}>
            <div className={styles['character-info__name']}>
              <h1>{character.name}</h1>
              <svg width="15" height="14" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
                  fill="#EC1D24"
                />
              </svg>
            </div>
            <p className={styles['character-info__info']}>{character.description}</p>
          </div>
        </div>
      </header>
    </>
  )
}
