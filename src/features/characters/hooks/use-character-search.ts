import { useEffect, useState } from 'react'
import { Character } from '../domain/character'
import { ApiResponse } from '../../../core/http/api-response'
import { useFavoriteCharacters } from './use-favorite-characters'

export const useCharacterSearch = (searchParam: string, isFavs: boolean = false) => {
  const [characters, setCharacters] = useState<ApiResponse<Character>>({ total: 0, results: [] })
  const [isSearching, setIsSearching] = useState(true)
  const { favorites } = useFavoriteCharacters()

  const getCharacters = async () => {
    const params = new URLSearchParams({ nameStartsWith: searchParam || '' })
    const charactersResponse = await fetch(`/api/characters?${params}`)
    return await charactersResponse.json()
  }

  const filteredFavorites = () =>
    favorites.filter(character => character.name.toLowerCase().startsWith(searchParam.toLowerCase()))

  const getFavoriteCharacters = () => {
    const favChars = searchParam ? filteredFavorites() : favorites
    return {
      total: favChars.length,
      results: favChars,
    }
  }

  const onSearch = async () => {
    setIsSearching(true)

    try {
      const charactersResponse = isFavs ? getFavoriteCharacters() : await getCharacters()
      setCharacters(charactersResponse)
    } catch {
      throw new Error('Error fetching')
    } finally {
      setIsSearching(false)
    }
  }

  useEffect(() => {
    onSearch()
  }, [searchParam])

  return { characters, isSearching }
}
