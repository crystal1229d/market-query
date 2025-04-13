import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import styles from './UtilityIcons.module.css'

export default function UtilityIcons() {
  return (
    <div className={styles.iconGroup}>
      <button
        className={styles.iconButton}
        aria-label="찜 목록">
        <AiOutlineHeart />
      </button>
      <button
        className={styles.iconButton}
        aria-label="장바구니">
        <BsCart2 />
      </button>
    </div>
  )
}
