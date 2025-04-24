import { HiMagnifyingGlass } from 'react-icons/hi2'
import styles from './Search.module.css'

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="검색어를 입력해주세요" />
      <button className={styles.iconButton} aria-label="찜 목록">
        <HiMagnifyingGlass />
      </button>
    </div>
  )
}
