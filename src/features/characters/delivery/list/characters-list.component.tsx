import { type FC } from 'react'
import { CharacterComponent } from '../character/character.component'
import styles from './characters-list.module.scss'
import { Character } from '../../domain/character'

interface CharacterListProps {
  characters: Character[]
}

export const CharactersList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul className={styles.characters__list}>
      {characters.map(character => (
        <li key={character.id.value}>
          <CharacterComponent character={character} />
        </li>
      ))}
    </ul>
  )
}
