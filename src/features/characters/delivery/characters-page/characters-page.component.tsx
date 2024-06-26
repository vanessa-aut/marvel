'use client'

import React, { type FC, useState } from 'react'
import { SearchBoxComponent } from '../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../list/characters-list.component'
import { useSearch } from '../../hooks/use-search'
import useDebounce from '../../hooks/use-debounce'

export const CharactersPageComponent: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { characters, isSearching } = useSearch(debouncedSearchValue)
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)

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
