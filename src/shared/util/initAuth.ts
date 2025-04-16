import { useAuthStore } from '@/feature/signin/model/authStore'

export const initializeAuth = () => {
  const saved = localStorage.getItem('auth')
  if (saved) {
    try {
      const { user, token } = JSON.parse(saved)
      useAuthStore.getState().setAuth(user, token)
    } catch (e) {
      console.error('로컬 저장 로그인 정보 오류', e)
    }
  }
}
