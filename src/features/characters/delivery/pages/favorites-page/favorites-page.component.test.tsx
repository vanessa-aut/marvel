import React from 'react'
import { render, screen } from '@testing-library/react'
import { FavoritesPageComponent } from './favorites-page.component'
import { useCharacterSearch } from '../../../hooks/use-character-search'
import useDebounce from '../../../hooks/use-debounce'
import { Character } from '../../../domain/character'

jest.mock('../../../hooks/use-character-search')
jest.mock('../../../hooks/use-debounce')
const mockUseCharacterSearch = useCharacterSearch as jest.MockedFunction<typeof useCharacterSearch>
const mockUseDebounce = useDebounce as jest.MockedFunction<typeof useDebounce>
const mockCharacters = {
  total: 2,
  results: [
    Character.create({
      id: 1,
      name: 'A_CHARACTER_NAME',
      image: 'A_CHARACTER.jpg',
      description: 'A_CHARACTER_DESCRIPTION',
    }),
    Character.create({
      id: 2,
      name: 'ANOTHER_CHARACTER_NAME',
      image: 'ANOTHER_CHARACTER.jpg',
      description: 'ANOTHER_CHARACTER_DESCRIPTION',
    }),
  ],
}
mockUseCharacterSearch.mockReturnValue({
  characters: mockCharacters,
  isSearching: false,
})
mockUseDebounce.mockImplementation(value => value)

describe('FavoritesPageComponent', () => {
  it('should render the title, search box and characters list', () => {
    render(<FavoritesPageComponent />)

    expect(screen.getByText('Favorites')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('A_CHARACTER_NAME')).toBeInTheDocument()
    expect(screen.getByText('ANOTHER_CHARACTER_NAME')).toBeInTheDocument()
  })
})
