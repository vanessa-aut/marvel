'use client'

import { type FC, ReactNode, useEffect, useState } from 'react'
import { FavoriteCharactersContext } from './favorite-characters.context'
import { useFavoriteCharacters } from '../hooks/use-favorite-characters'
import { Character } from '../domain/character'

interface Props {
  children: ReactNode
}

export const FavoriteCharactersProvider: FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([])

  const isFavorite = (character: Character) => {
    return favorites.some(fav => fav.id.isEqual(character.id))
  }

  const favoritesCounter = () => favorites.length

  const addFavorite = (character: Character) => {
    setFavorites([...favorites, character])
  }

  const deleteFavorite = (character: Character) => {
    const filteredFavs = favorites.filter(fav => !fav.id.isEqual(character.id))
    setFavorites(filteredFavs)
  }

  const updateFavorites = (character: Character) => {
    isFavorite(character) ? deleteFavorite(character) : addFavorite(character)
  }

  return (
    <FavoriteCharactersContext.Provider
      value={{
        favorites,
        favoritesCounter,
        isFavorite,
        updateFavorites,
      }}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  )
}
