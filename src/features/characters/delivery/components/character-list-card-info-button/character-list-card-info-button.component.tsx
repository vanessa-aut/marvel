'use client'

import { type FC } from 'react'
import { useFavoriteCharacters } from '../../../hooks/use-favorite-characters'
import { Character } from '../../../domain/character'
import styles from './character-list-card-info-button.module.scss'

interface FavoriteButtonProps {
  character: Character
}

export const CharacterListCardInfoButtonComponent: FC<FavoriteButtonProps> = ({ character }) => {
  const { isFavorite, updateFavorites } = useFavoriteCharacters()

  const onClickHandle = () => {
    updateFavorites(character)
  }

  return (
    <div className={styles.card__info}>
      <h2 className={styles.card__name}>{character.name}</h2>
      <button className={styles.card__action} onClick={onClickHandle}>
        {isFavorite(character) ? (
          <svg
            className={styles.fav}
            width="15"
            height="14"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
              fill="#EC1D24"
            />
          </svg>
        ) : (
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.28564 1.55237L4.80449 0.697502L4.28564 0.382594L3.76679 0.697502L4.28564 1.55237ZM7.28564 3.37318L6.7668 4.22804L7.28564 4.54295L7.80449 4.22804L7.28564 3.37318ZM1.28564 3.37318L0.766795 2.51831L0.285645 2.81034V3.37318H1.28564ZM1.28564 7.27491H0.285645V7.73644L0.636848 8.03587L1.28564 7.27491ZM7.28564 12.3905L6.63685 13.1515L7.28564 13.7046L7.93444 13.1515L7.28564 12.3905ZM13.2856 7.27491L13.9344 8.03587L14.2856 7.73644V7.27491H13.2856ZM13.2856 3.37318H14.2856V2.81034L13.8045 2.51831L13.2856 3.37318ZM10.2856 1.55237L10.8045 0.697502L10.2856 0.382594L9.7668 0.697502L10.2856 1.55237ZM3.76679 2.40723L6.7668 4.22804L7.80449 2.51831L4.80449 0.697502L3.76679 2.40723ZM1.80449 4.22804L4.80449 2.40723L3.76679 0.697502L0.766795 2.51831L1.80449 4.22804ZM2.28564 7.27491V3.37318H0.285645V7.27491H2.28564ZM7.93444 11.6296L1.93444 6.51395L0.636848 8.03587L6.63685 13.1515L7.93444 11.6296ZM7.93444 13.1515L13.9344 8.03587L12.6368 6.51395L6.63685 11.6296L7.93444 13.1515ZM14.2856 7.27491V3.37318H12.2856V7.27491H14.2856ZM13.8045 2.51831L10.8045 0.697502L9.7668 2.40723L12.7668 4.22804L13.8045 2.51831ZM9.7668 0.697502L6.7668 2.51831L7.80449 4.22804L10.8045 2.40723L9.7668 0.697502Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
