import { create } from 'zustand'

interface CartState {
  cartId: number | null
  setCartId: (id: number) => void
}

export const useCartStore = create<CartState>(set => ({
  cartId: null,
  setCartId: id => set({ cartId: id })
}))
