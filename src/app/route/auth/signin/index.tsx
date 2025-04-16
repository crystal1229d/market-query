import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/feature/signin/model/authStore'
import { login } from '@/feature/signin/api'
import Button from '@ui/Button'
import styles from './page.module.css'

export default function SigninPage() {
  const navigate = useNavigate()
  const setAuth = useAuthStore(state => state.setAuth)

  const handleLogin = async () => {
    try {
      const res = await login({ username: 'emilys', password: 'emilyspass' })
      const { token, ...user } = res

      setAuth(user, token)
      localStorage.setItem('auth', JSON.stringify({ user, token }))

      navigate('/')
    } catch (err) {
      console.error('로그인 실패', err)
    }
  }

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>로그인 페이지</h3>
      <Button onClick={handleLogin}>로그인</Button>
    </main>
  )
}
