import { renderHook, act } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import { useCharacterSearch } from './use-character-search'
import { useFavoriteCharacters } from './use-favorite-characters'
import { Character } from '../domain/character'

const A_CHARACTER = Character.create({
  id: 1,
  name: 'A_CHARACTER_NAME',
  image: 'A_CHARACTER.jpg',
  description: 'A_CHARACTER_DESCRIPTION',
})

jest.mock('./use-favorite-characters')
const mockUseFavoriteCharacters = useFavoriteCharacters as jest.MockedFunction<typeof useFavoriteCharacters>
mockUseFavoriteCharacters.mockReturnValue({
  favorites: [A_CHARACTER],
  favoritesCounter: jest.fn(),
  isFavorite: jest.fn(),
  updateFavorites: jest.fn(),
})

describe('useCharacterSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return a character when isFavorite is true', async () => {
    const { result } = renderHook(() => useCharacterSearch('A_CHARACTER_NAME', true))

    await act(async () => {
      await waitFor(() => {
        return result.current.isSearching === false
      })
    })

    expect(result.current.characters.total).toBe(1)
    expect(result.current.characters.results).toHaveLength(1)
    expect(result.current.isSearching).toBe(false)
  })

  it('should not return any character when isFavorite is false', async () => {
    const { result } = renderHook(() => useCharacterSearch('NO_FAV_CHARACTER_NAME', true))

    await act(async () => {
      await waitFor(() => {
        return result.current.isSearching === false
      })
    })

    expect(result.current.characters.total).toBe(0)
    expect(result.current.characters.results).toHaveLength(0)
    expect(result.current.isSearching).toBe(false)
  })
})
