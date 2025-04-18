import { CartItem } from '@cart/type'

export async function addToCartAPI(userId: number, products: CartItem[]) {
  const res = await fetch(`/api/carts/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, products })
  })
  return res.json()
}

export async function updateCartAPI(
  cartId: number,
  userId: number,
  products: CartItem[]
) {
  const res = await fetch(`/api/carts/${cartId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ merge: true, userId, products })
  })
  return res.json()
}
