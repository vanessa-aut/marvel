import { Entity } from '../../../core/domain/entity'
import { Id } from '../../../core/types/id'

export interface ComicProps {
  id: number
  title: string
  image: string
  date: string
}

export type ComicPrimitives = ComicProps

export class Comic extends Entity {
  readonly id: Id
  readonly title: string
  readonly image: string
  readonly date: string

  constructor(props: ComicProps) {
    super()
    this.id = Id.create({ value: props.id })
    this.title = props.title
    this.image = props.image
    this.date = props.date
  }

  static create(props: ComicProps) {
    return new Comic(props)
  }

  toPrimitives(): ComicPrimitives {
    return {
      id: this.id.value,
      title: this.title,
      image: this.image,
      date: this.date,
    }
  }
}
