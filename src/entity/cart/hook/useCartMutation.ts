import { useMutation } from '@tanstack/react-query'
import { useCartStore } from '../model/cartStore'
import { useCartQuery } from './useCartQuery'
import { createCart, updateCart } from '../api'
import { Product } from '@/entity/product/type'

export function useCartMutation() {
  const { cartId, setCartId } = useCartStore()
  const { data: cart } = useCartQuery()

  const cartCreateMutation = useMutation({
    mutationFn: createCart,
    onSuccess: data => {
      setCartId(data.id)
    }
  })

  const cartUpdateMutation = useMutation({
    mutationFn: updateCart
  })

  const addToCart = (productId: number, quantity: number) => {
    const existing = cart?.products.find((p: Product) => p.id === productId)
    const totalQty = (existing?.quantity || 0) + quantity
    const product = { id: productId, quantity: totalQty }

    if (!cartId) {
      cartCreateMutation.mutate({ products: [product] })
    } else {
      cartUpdateMutation.mutate({ cartId, products: [product] })
    }
  }

  return {
    addToCart,
    isLoading: cartCreateMutation.isPending || cartUpdateMutation.isPending,
    isError: cartCreateMutation.isError || cartUpdateMutation.isError
  }
}
