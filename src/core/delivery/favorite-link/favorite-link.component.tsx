'use client'

import { FC } from 'react'
import styles from './favorite-link.module.scss'
import { useFavoriteCharacters } from '../../../features/characters/hooks/use-favorite-characters'
import Link from 'next/link'

export const FavoriteLinkComponent: FC = () => {
  const { favoritesCounter } = useFavoriteCharacters()
  return (
    <Link href="/favorites" className={styles.favorite}>
      <div>
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
            fill="#EC1D24"
          />
        </svg>
      </div>
      <div>{favoritesCounter()}</div>
    </Link>
  )
}
