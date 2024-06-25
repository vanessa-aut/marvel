'use client'

import React, { type FC, useState } from 'react'
import { SearchBoxComponent } from '../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../list/characters-list.component'
import { useSearch } from '../../hooks/use-search'

export const CharactersPageComponent: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const { characters, isSearching } = useSearch(searchValue)
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.currentTarget.value)

  return (
    <>
      {isSearching ? (
        <h1>Loading</h1>
      ) : (
        <>
          <SearchBoxComponent onChangeHandle={onChangeHandle} />
          <CharactersList characters={characters.results} />
        </>
      )}
    </>
  )
}
