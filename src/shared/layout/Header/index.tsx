import { Link } from 'react-router-dom'
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
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/signin">로그인</Link>
            </li>
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
