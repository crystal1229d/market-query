import { useNavigate } from 'react-router-dom'
import { useSearchStore } from '@/feature/product-list/model/searchStore'
import styles from './Logo.module.css'

export default function Logo() {
  const navigate = useNavigate()
  const { resetKeyword } = useSearchStore()

  const handleLogoClick = () => {
    resetKeyword()
    navigate('/')
  }

  return (
    <div
      className={styles.logo}
      onClick={handleLogoClick}>
      Market Query
    </div>
  )
}
