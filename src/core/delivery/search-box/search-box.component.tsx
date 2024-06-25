'use client'

import React, { FC } from 'react'
import { MagnifierIcon } from '../magnifier-icon/magnifier-icon.component'

interface SearchBoxProps {
  onChangeHandle?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBoxComponent: FC<SearchBoxProps> = ({ onChangeHandle }) => {
  return (
    <div className="">
      <MagnifierIcon />
      <input placeholder="SEARCH A CHARACTER..." className="" onChange={onChangeHandle} data-testid="search-box" />
    </div>
  )
}
