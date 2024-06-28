import React, { type FC } from 'react'
import styles from './comic-carousel-item.module.scss'

export const ComicCarouselItemComponent: FC = ({}) => {
  return (
    <div className={styles.carousel__item}>
      <img
        src="http://i.annihil.us/u/prod/marvel/i/mg/3/00/59440c555b02c.jpg"
        alt="titulo"
        className={styles.carousel__image}
      />
      <h3>Who is...? Adam Warlock Infinity Comic #1</h3>
      <p>1947</p>
    </div>
  )
}
