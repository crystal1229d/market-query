import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@cart/type'

type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateQuantity: (productId: number, quantity: number) => void
  removeItem: (productId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: item => {
        const existing = get().items.find(i => i.productId === item.productId)
        if (existing) {
          set({
            items: get().items.map(i =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          })
        } else {
          set({ items: [...get().items, item] })
        }
      },
      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map(i =>
            i.productId === productId ? { ...i, quantity } : i
          )
        })
      },
      removeItem: productId => {
        set({ items: get().items.filter(i => i.productId !== productId) })
      },
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage'
    }
  )
)
