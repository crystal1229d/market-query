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
  title: string
  brand: string
  price: number
  discountPercentage?: number
  thumbnail?: string
  availabilityStatus?: string
  minimumOrderQuantity?: number

  quantity: number
}
