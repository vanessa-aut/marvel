'use client'

import React, { FC } from 'react'
import { MagnifierIcon } from '../magnifier-icon/magnifier-icon.component'
import styles from './search-box.module.scss'

interface SearchBoxProps {
  value: string
  onChangeHandle?: (event: React.ChangeEvent<HTMLInputElement>) => void
  total: number
}

export const SearchBoxComponent: FC<SearchBoxProps> = ({ value, onChangeHandle, total }) => {
  return (
    <div className={styles['search-box']}>
      <div className={styles['search-box__wrapper']}>
        <MagnifierIcon />
        <input
          placeholder="SEARCH A CHARACTER..."
          className={styles['search-box__text']}
          onChange={onChangeHandle}
          data-testid="search-box"
          value={value}
        />
      </div>
      <p className={styles['search-box__total']}>{total} results</p>
    </div>
  )
}
