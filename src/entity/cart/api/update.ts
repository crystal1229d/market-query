interface UpdateCartParams {
  cartId: number
  products: {
    id: number
    quantity: number
  }[]
}

export async function updateCart({ cartId, products }: UpdateCartParams) {
  const response = await fetch(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/carts/${cartId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        products
      })
    }
  )

  if (!response.ok) {
    throw new Error('장바구니 수정을 실패했습니다.')
  }

  return response.json()
}
