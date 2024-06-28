'use client'

import React, { type FC, useState } from 'react'
import { SearchBoxComponent } from '../../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../../components/character-list/characters-list.component'
import { useCharacterSearch } from '../../../hooks/use-character-search'
import useDebounce from '../../../hooks/use-debounce'
import { LoadingComponent } from '../../../../../core/delivery/loading/loading.component'

export const CharactersPageComponent: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { characters, isSearching } = useCharacterSearch(debouncedSearchValue)
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)

  return (
    <>
      {isSearching ? (
        <LoadingComponent />
      ) : (
        <div className="main-page">
          <SearchBoxComponent value={searchValue} onChangeHandle={onChangeHandle} total={characters.total} />
          <CharactersList characters={characters.results} />
        </div>
      )}
    </>
  )
}
