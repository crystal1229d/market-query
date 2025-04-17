import { DEFAULT_USER_ID } from '@/shared/config'

interface CreateCartParams {
  userId?: number
  products: {
    id: number
    quantity: number
  }[]
}

export async function createCart({
  userId = DEFAULT_USER_ID,
  products
}: CreateCartParams) {
  const response = await fetch(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/carts/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        products
      })
    }
  )

  if (!response.ok) {
    throw new Error('장바구니 생성을 실패했습니다.')
  }

  return response.json()
}
