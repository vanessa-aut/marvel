'use client'

import React, { FC } from 'react'
import { MagnifierIcon } from '../magnifier-icon/magnifier-icon.component'

interface SearchBoxProps {
  onChangeHandle?: (value: string) => void
}

export const SearchBoxComponent: FC<SearchBoxProps> = ({ onChangeHandle }) => {
  return (
    <div className="">
      <MagnifierIcon />
      <input
        placeholder="SEARCH A CHARACTER..."
        className=""
        onChange={event => console.log(event.currentTarget.value)}
        data-testid="search-box"
      />
    </div>
  )
}
