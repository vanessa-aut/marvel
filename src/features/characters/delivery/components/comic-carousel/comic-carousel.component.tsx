import React, { type FC } from 'react'
import styles from './comic-carousel.module.scss'
import { ComicCarouselItemComponent } from '../comic-carousel-item/comic-carousel-item.component'

export const ComicCarouselComponent: FC = ({}) => {
  return (
    <main className="main-page">
      <h2 className={styles.title}>Comics</h2>
      <div className={styles['carousel-container']}>
        <div className={styles.carousel}>
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
          <ComicCarouselItemComponent />
        </div>
      </div>
    </main>
  )
}
