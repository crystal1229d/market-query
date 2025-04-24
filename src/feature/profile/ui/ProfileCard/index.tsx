import { User } from '@/entity/user/type'
import styles from './ProfileCard.module.css'

interface Props {
  user: User
}

export default function ProfileCard({ user }: Props) {
  return (
    <div className={styles.profile}>
      <img src={user.image} alt="프로필 이미지" className={styles.avatar} />

      <p className={styles.greetingContainer}>
        <span className={styles.greeting}>반가워요!</span>
        <span>
          {user.firstName} {user.lastName}님
        </span>
      </p>

      <div className={styles.meta}>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.age}세</p>
        <p>{user.gender}</p>
      </div>
    </div>
  )
}
