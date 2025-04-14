import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { navRoutes } from '@/app/config'
import { useSearchStore } from '@/feature/product-list/model/searchStore'
import styles from './Nav.module.css'

export default function Nav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { resetKeyword } = useSearchStore()

  const hasActive = navRoutes.some(route => route.path === pathname)

  const isActive = (path: string) => {
    return hasActive && pathname === path
  }

  const handleNavClick = (path: string) => {
    resetKeyword()
    navigate(path)
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navRoutes.map(({ path, label }) => (
          <li
            key={path}
            className={clsx(styles.navItem, isActive(path) && styles.active)}>
            <button
              type="button"
              onClick={() => handleNavClick(path)}
              className={styles.navLink}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
