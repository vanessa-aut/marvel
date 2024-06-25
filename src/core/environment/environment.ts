import { Mode } from './mode'

export interface Environment {
  marvelApiUrl: string
  marvelApiPrivateKey: string
  marvelApiPublicKey: string
  mode: Mode
}
