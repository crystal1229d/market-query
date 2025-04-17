import { DEFAULT_USER_ID } from '@/shared/config'

export async function fetchCartByUserId(userId: number = DEFAULT_USER_ID) {
  const response = await fetch(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/carts/${userId}`
  )
  if (!response.ok) {
    throw new Error('장바구니 정보를 불러오지 못했습니다.')
  }
  return response.json()
}
