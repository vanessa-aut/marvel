import { type FC } from 'react'
import { Character } from '../../domain/character'
import styles from './character.module.scss'
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component'

interface CharacterProps {
  character: Character
}

export const CharacterComponent: FC<CharacterProps> = ({ character }) => {
  return (
    <article className={styles.card}>
      <a href={`/character/${character.id.value}`} className={styles['card__img-wrapper']}>
        <img className={styles.card__img} src={character.image} alt={`Image of ${character.name}`} />
      </a>
      <FavoriteButtonComponent character={character} />
    </article>
  )
}
