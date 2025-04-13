import Logo from '@ui/Logo'
import SearchBar from '@/feature/product-list/ui/SearchBar'
import UtilityIcons from './UtilityIcons'
import Nav from '@layout/Nav'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <ul className={styles.authList}>
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>

        <div className={styles.midBar}>
          <Logo />
          <SearchBar />
          <UtilityIcons />
        </div>

        <Nav />
      </div>
    </header>
  )
}
