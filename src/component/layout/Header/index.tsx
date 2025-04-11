import Logo from '../../shared/Logo'
import Search from './Search'
import UtilityIcons from './UtilityIcons'
import Nav from '../Nav'
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
          <Search />
          <UtilityIcons />
        </div>

        <Nav />
      </div>
    </header>
  )
}
