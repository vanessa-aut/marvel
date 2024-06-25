import { createContext } from 'react'
import { Character } from '../domain/character'

interface FavoriteCharacters {
  favorites: Character[]
  favoritesCounter: () => number
  isFavorite: (character: Character) => boolean
  updateFavorites: (character: Character) => void
}

export const FavoriteCharactersContext = createContext<FavoriteCharacters>({
  favorites: [],
  favoritesCounter: () => 0,
  isFavorite: (character: Character) => false,
  updateFavorites: (character: Character) => {},
})
