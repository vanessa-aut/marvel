import { Entity } from '../../../core/domain/entity'
import { Id } from '../../../core/types/id'

export interface CharacterProps {
  id: number
  name: string
  image: string
  description: string
}

export type CharacterPrimitives = CharacterProps

export class Character extends Entity {
  readonly id: Id
  readonly name: string
  readonly image: string
  readonly description: string

  constructor(props: CharacterProps) {
    super()
    this.id = Id.create({ value: props.id })
    this.name = props.name
    this.image = props.image
    this.description = props.description
  }

  static create(props: CharacterProps) {
    return new Character(props)
  }

  toPrimitives(): CharacterPrimitives {
    return {
      id: this.id.value,
      name: this.name,
      image: this.image,
      description: this.description,
    }
  }
}
