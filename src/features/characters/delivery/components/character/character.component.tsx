import { type FC } from 'react'
import { Character } from '../../../domain/character'
import styles from './character.module.scss'
import Link from 'next/link'
import { CardInfoButtonComponent } from '../card-info-button/card-info-button.component'

interface CharacterProps {
  character: Character
}

export const CharacterComponent: FC<CharacterProps> = ({ character }) => {
  return (
    <article className={styles.card}>
      <Link href={`/character/${character.id.value}`} className={styles['card__img-wrapper']}>
        <img className={styles.card__img} src={character.image} alt={`Image of ${character.name}`} />
      </Link>
      <CardInfoButtonComponent character={character} />
    </article>
  )
}
