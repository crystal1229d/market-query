import styles from './QuickMenu.module.css'

export default function QuickMenu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>주문 내역</li>
        <li>내 정보</li>
        <li>찜한 상품</li>
        <li>쿠폰</li>
        <li>리뷰</li>
      </ul>
    </nav>
  )
}
