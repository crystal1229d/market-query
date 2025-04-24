import { useNavigate } from 'react-router-dom'
import { useSearchStore } from '../../model/searchStore'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const { keyword, setKeyword } = useSearchStore()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) return
    navigate(`/search?q=${encodeURIComponent(keyword)}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="검색어를 입력해주세요"
      />
      <button type="submit" className={styles.iconButton} aria-label="찜 목록">
        <HiMagnifyingGlass />
      </button>
    </form>
  )
}
