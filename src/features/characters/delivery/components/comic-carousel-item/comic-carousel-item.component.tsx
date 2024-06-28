import { type FC } from 'react'
import styles from './comic-carousel-item.module.scss'
import { Comic } from '../../../domain/comic'

interface ComicCarouselItemComponentProps {
  comic: Comic
}

export const ComicCarouselItemComponent: FC<ComicCarouselItemComponentProps> = ({ comic }) => {
  const millisecsDate = Date.parse(comic.date)
  const comicDate = new Date(millisecsDate)

  return (
    <div className={styles.carousel__item}>
      <img src={comic.image} alt={`Cover of ${comic.title}`} className={styles.carousel__image} />
      <h3>{comic.title}</h3>
      <p>{comicDate.getFullYear()}</p>
    </div>
  )
}
