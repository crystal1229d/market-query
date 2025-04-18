import { Product } from '../product/type'

export interface Cart {
  id: number
  products: Product[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface CartItem {
  productId: number
  name: string
  price: number
  thumbnail?: string
  quantity: number
}
