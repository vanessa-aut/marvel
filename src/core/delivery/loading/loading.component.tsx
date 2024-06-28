import { FC } from 'react'
import styles from './loading.module.scss'

export const LoadingComponent: FC = () => {
  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-bar__bar']}></div>
    </div>
  )
}
