'use client'

import { FC } from 'react'
import styles from './header.module.scss'
import { Logo } from '../logo/logo.component'
import { FavoriteLinkComponent } from '../favorite-link/favorite-link.component'

export const HeaderComponent: FC = () => {
  return (
    <header>
      <nav className={styles['main-nav']} aria-label="Main menu">
        <ul className={styles['main-nav__list']}>
          <li className={styles['main-nav__item']}>
            <a href="/">
              <Logo className={styles['main-nav__logo']} />
            </a>
          </li>
          <li className={styles['main-nav__item']}>
            <FavoriteLinkComponent />
          </li>
        </ul>
      </nav>
    </header>
  )
}
