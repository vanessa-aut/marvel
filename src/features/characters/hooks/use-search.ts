import { useEffect, useState } from 'react'
import { Character } from '../domain/character'
import { ApiResponse } from '../../../core/http/api-response'

export const useSearch = (searchParam?: string) => {
  const [characters, setCharacters] = useState<ApiResponse<Character>>({ total: 0, results: [] })
  const [isSearching, setIsSearching] = useState(true)

  const onSearch = async () => {
    setIsSearching(true)

    try {
      const params = new URLSearchParams({ nameStartsWith: searchParam || '' })
      const charactersResponse = await fetch(`/api/characters?${params}`)

      setCharacters(await charactersResponse.json())
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
