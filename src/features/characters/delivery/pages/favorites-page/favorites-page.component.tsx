'use client'

import React, { type FC, useState } from 'react'
import { SearchBoxComponent } from '../../../../../core/delivery/search-box/search-box.component'
import { CharactersList } from '../../components/character-list/characters-list.component'
import useDebounce from '../../../hooks/use-debounce'
import { useCharacterSearch } from '../../../hooks/use-character-search'
import styles from './favorites-page.module.scss'
import { LoadingComponent } from '../../../../../core/delivery/loading/loading.component'

export const FavoritesPageComponent: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const { characters, isSearching } = useCharacterSearch(debouncedSearchValue, true)
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)

  return (
    <div className="main-page">
      <h1 className={styles.title}>Favorites</h1>
      <SearchBoxComponent value={searchValue} onChangeHandle={onChangeHandle} total={characters.total} />
      <CharactersList characters={characters.results} />
    </div>
  )
}
