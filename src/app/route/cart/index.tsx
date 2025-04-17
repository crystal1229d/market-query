import { useEffect, useState } from 'react'
import { fetchCartByUserId } from '@/entity/cart/api'
import { Cart } from '@/entity/cart/type'
import { DEFAULT_USER_ID } from '@/shared/config'

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await fetchCartByUserId(DEFAULT_USER_ID)
        setCart(data.carts[0])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e.message)
      }
    }
    loadCart()
  }, [])

  if (error) return <div className="p-4 text-red-500">{error}</div>
  if (!cart) return <div className="p-4">장바구니를 불러오는 중...</div>

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">장바구니</h2>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="selectAll"
          />
          <label htmlFor="selectAll">
            전체선택 {cart.totalQuantity}/{cart.totalProducts}
          </label>
          <button className="ml-auto text-sm text-gray-500">선택삭제</button>
        </div>

        <div className="bg-gray-100 rounded p-4">
          {cart.products.map(product => (
            <div key={product.id}>
              {product.title} / {product.price.toLocaleString()}
            </div>
          ))}
        </div>
      </div>

      <div className="w-80 bg-gray-50 rounded p-6 shadow-sm">
        <div className="mb-4">
          <h3 className="font-semibold mb-1">배송지</h3>
          <p className="text-sm text-gray-600">
            서울 특별시 강남구 테헤란로 123길 45 3층
          </p>
          <button className="text-xs text-blue-500 mt-1">변경</button>
        </div>

        <div className="border-t border-b py-4">
          <div className="flex justify-between mb-2">
            <span>상품금액</span>
            <span>{cart.total.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between mb-2 text-red-500">
            <span>상품할인금액</span>
            <span>
              - {(cart.total - cart.discountedTotal).toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between">
            <span>배송비</span>
            <span>0원</span>
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg py-4">
          <span>결제예정금액</span>
          <span>{cart.discountedTotal.toLocaleString()}원</span>
        </div>

        <button
          className="w-full bg-purple-200 text-purple-600 font-bold py-2 rounded disabled:opacity-50"
          disabled>
          상품을 선택해주세요
        </button>
      </div>
    </div>
  )
}
