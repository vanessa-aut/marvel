import { type FC } from 'react'
import styles from './comic-carousel.module.scss'
import { ComicCarouselItemComponent } from '../comic-carousel-item/comic-carousel-item.component'
import { Character } from '../../../domain/character'
import { Comic } from '../../../domain/comic'

interface ComicCarouselComponentProps {
  comics: Comic[]
}

export const ComicCarouselComponent: FC<ComicCarouselComponentProps> = ({ comics }) => {
  return (
    <main className="main-page">
      <h2 className={styles.title}>Comics</h2>
      <div className={styles['carousel-container']}>
        {comics.length > 0 ? (
          <div className={styles.carousel}>
            {comics.map(comic => (
              <ComicCarouselItemComponent key={comic.id.value} comic={comic} />
            ))}
          </div>
        ) : (
          <h1>Ups, no comics!</h1>
        )}
      </div>
    </main>
  )
}
