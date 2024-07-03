import { type FC } from 'react'
import { CharacterListCardComponent } from '../character-list-card/character-list-card.component'
import styles from './characters-list.module.scss'
import { Character } from '../../../domain/character'

interface CharacterListProps {
  characters: Character[]
}

export const CharactersList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <>
      {characters.length > 0 ? (
        <ul className={styles.characters__list}>
          {characters.map(character => (
            <li key={character.id.value}>
              <CharacterListCardComponent character={character} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Ups, no characters!</h1>
      )}
    </>
  )
}
