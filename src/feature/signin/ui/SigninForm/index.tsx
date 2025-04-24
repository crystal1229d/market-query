import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@feature/signin/model/authStore'
import { login } from '@feature/signin/api'
import { useSigninForm } from '@feature/signin/hook/useSigninForm'
import Button from '@ui/Button'
import { SigninFormInput } from '../../type'
import styles from './SigninForm.module.css'

export default function SigninForm() {
  const { register, handleSubmit, isValid, errors } = useSigninForm()
  const navigate = useNavigate()
  const setAuth = useAuthStore(state => state.setAuth)

  const handleLogin = async (data: SigninFormInput) => {
    if (data.username === '' || data.password === '') return

    try {
      const res = await login({ username: 'emilys', password: 'emilyspass' })
      //   const res = await login(data)
      const { token, ...user } = res

      setAuth(user, token)
      localStorage.setItem('auth', JSON.stringify({ user, token }))

      navigate('/')
    } catch (err) {
      console.error('로그인 실패', err)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        className={styles.input}
        {...register('username')}
      />
      {errors?.username && <p className={styles.error}>{errors.username.message}</p>}
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        className={styles.input}
        {...register('password')}
      />
      {errors?.password && <p className={styles.error}>{errors.password.message}</p>}

      <Button type="submit" disabled={!isValid} className={styles.button}>
        로그인
      </Button>
      <Button
        type="button"
        variant="outline"
        className={styles.button}
        onClick={() => navigate('/signup')}>
        회원가입
      </Button>
    </form>
  )
}
