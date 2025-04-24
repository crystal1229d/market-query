import { DEFAULT_USER_ID } from '@/shared/config'

export async function fetchUser(userId: number = DEFAULT_USER_ID) {
  const response = await fetch(`${import.meta.env.VITE_DUMMYJSON_BASE_URL}/users/${userId}`)
  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.')
  }
  return response.json()
}
