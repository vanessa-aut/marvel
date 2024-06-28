import React from 'react'
import { render, screen } from '@testing-library/react'
import { Character } from '../../../domain/character'
import { CharactersList } from './characters-list.component'

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

describe('CharactersList', () => {
  it('should show a message when there is no characters', () => {
    render(<CharactersList characters={[]} />)
    expect(screen.getByText('Ups, no results!')).toBeInTheDocument()
  })

  it('should render the characters list', () => {
    render(<CharactersList characters={mockCharacters.results} />)
    expect(screen.getByText('A_CHARACTER_NAME')).toBeInTheDocument()
    expect(screen.getByText('ANOTHER_CHARACTER_NAME')).toBeInTheDocument()
  })
})
