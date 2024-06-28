import { type FC } from 'react'
import { Character } from '../../../domain/character'
import styles from './character-list-card.module.scss'
import Link from 'next/link'
import { CharacterListCardInfoButtonComponent } from '../character-list-card-info-button/character-list-card-info-button.component'

interface CharacterProps {
  character: Character
}

export const CharacterListCardComponent: FC<CharacterProps> = ({ character }) => {
  return (
    <article className={styles.card}>
      <Link href={`/character/${character.id.value}`} className={styles['card__img-wrapper']}>
        <img className={styles.card__img} src={character.image} alt={`Image of ${character.name}`} />
      </Link>
      <CharacterListCardInfoButtonComponent character={character} />
    </article>
  )
}
