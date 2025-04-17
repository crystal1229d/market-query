import { Link } from 'react-router-dom'
import Logo from '@ui/Logo'
import SearchBar from '@/feature/product-list/ui/SearchBar'
import { useAuthStore } from '@/feature/signin/model/authStore'
import UtilityIcons from './UtilityIcons'
import Nav from '@layout/Nav'
import styles from './Header.module.css'

export default function Header() {
  const user = useAuthStore(state => state.user)
  const clearAuth = useAuthStore(state => state.clearAuth)

  const handleLogout = () => {
    clearAuth()
    localStorage.removeItem('auth')
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.topBar}>
          <ul className={styles.authList}>
            {!user ? (
              <>
                <li>
                  <Link to="/signup">회원가입</Link>
                </li>
                <li>
                  <Link to="/signin">로그인</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile">마이페이지</Link>
                </li>
                <li onClick={handleLogout}>로그아웃</li>
              </>
            )}
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
