import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { useCartStore } from '@cart/model/useCartStore'

import styles from './UtilityIcons.module.css'

export default function UtilityIcons() {
  const cartItemCount = useCartStore(state => state.itemCount())

  return (
    <div className={styles.iconGroup}>
      <Link to="/wishlist" className={styles.iconButton} aria-label="찜 목록">
        <AiOutlineHeart />
      </Link>
      <Link to="/cart" className={styles.iconButton} aria-label="장바구니">
        <BsCart2 />
        {cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
      </Link>
    </div>
  )
}
