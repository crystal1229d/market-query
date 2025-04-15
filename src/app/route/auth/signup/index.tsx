import SignupForm from '@/feature/signup/ui/SignupForm'
import styles from './page.module.css'

export default function SignupPage() {
  return (
    <main className={styles.container}>
      <h3 className={styles.title}>회원가입</h3>
      <SignupForm />
    </main>
  )
}
