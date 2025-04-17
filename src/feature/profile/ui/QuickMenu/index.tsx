import { Link } from 'react-router-dom'
import styles from './QuickMenu.module.css'

export default function QuickMenu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/profile/order">주문 내역</Link>
        </li>
        <li>
          <Link to="/profile/info">개인정보 수정</Link>
        </li>
        <li>
          <Link to="/profile/pick">찜한 상품</Link>
        </li>
        <li>쿠폰</li>
        <li>
          <Link to="/profile/review">리뷰</Link>
        </li>
      </ul>
    </nav>
  )
}
