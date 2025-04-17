import { useNavigate } from 'react-router-dom'
import { useUser } from '@user/hook/useUser'
import Spinner from '@ui/Spinner'
import ProfileCard from '@/feature/profile/ui/ProfileCard'
import QuickMenu from '@/feature/profile/ui/QuickMenu'
import styles from './page.module.css'

export default function ProfilePage() {
  const navigate = useNavigate()
  const { data: user, isLoading, isError } = useUser()

  if (isLoading) return <Spinner />
  if (isError || !user) navigate('/')

  return (
    <div className={styles.wrapper}>
      <main className={styles.page}>
        <aside className={styles.sidebar}>
          <ProfileCard user={user} />
          <QuickMenu />
        </aside>

        <section className={styles.content}>
          <h2>마이페이지👋</h2>
          <p>내 정보</p>
        </section>
      </main>
    </div>
  )
}
