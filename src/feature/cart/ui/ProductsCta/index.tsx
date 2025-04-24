import clsx from 'clsx'
import Checkbox from '@ui/Checkbox'
import styles from './ProductsCta.module.css'

interface Props {
  totalCount: number
}

export default function ProductsCta({ totalCount }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <Checkbox
          variant="square"
          label={`전체 선택 1/${totalCount}`}
          labelClassName={styles.checkboxLabel}
        />
        <button>선택삭제</button>
      </div>

      <div className={styles.bottomRow}>
        <button className={clsx(`${styles.badge} ${styles.available}`)}>
          구매가능 {totalCount}
        </button>
        <button className={clsx(`${styles.badge} ${styles.unavailable}`)}>품절/구매불가 4</button>
      </div>
    </div>
  )
}
