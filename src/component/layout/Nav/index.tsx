import { useLocation } from 'react-router-dom'
import { routes } from '../../../route/routes'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Nav() {
  const { pathname } = useLocation()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {routes.map(({ path, label }) => (
          <li
            key={path}
            className={clsx(styles.navItem, isActive(path) && styles.active)}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
