import { useUser } from '@/entity/user/hook/useUser'
import styles from './page.module.css'

export default function ProfilePage() {
  const { data: user, isLoading, isError } = useUser()

  if (isLoading) return <main>로딩 중...</main>
  if (isError || !user) return <main>유저 정보를 불러오지 못했습니다.</main>

  return (
    <main className={styles.container}>
      <h1>
        {user.firstName} {user.lastName}님의 마이페이지
      </h1>
      <p>이메일: {user.email}</p>
      <p>전화번호: {user.phone}</p>
      <p>성별: {user.gender}</p>
      <p>나이: {user.age}</p>
      <img
        src={user.image}
        alt="프로필 이미지"
        className={styles.avatar}
      />
    </main>
  )
}
