import Logo from '../../shared/Logo'
import Nav from '../Nav'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Logo />
        <ul className={styles.authList}>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
      <Nav />
    </header>
  )
}
