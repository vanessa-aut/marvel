import { useContext } from 'react'
import { FavoriteCharactersContext } from '../providers/favorite-characters.context'

export const useFavoriteCharacters = () => {
  return useContext(FavoriteCharactersContext)
}
