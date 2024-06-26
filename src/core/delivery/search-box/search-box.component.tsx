'use client'

import React, { FC } from 'react'
import { MagnifierIcon } from '../magnifier-icon/magnifier-icon.component'

interface SearchBoxProps {
  value: string
  onChangeHandle?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBoxComponent: FC<SearchBoxProps> = ({ value, onChangeHandle }) => {
  return (
    <div className="">
      <MagnifierIcon />
      <input
        placeholder="SEARCH A CHARACTER..."
        className=""
        onChange={onChangeHandle}
        data-testid="search-box"
        value={value}
      />
    </div>
  )
}
