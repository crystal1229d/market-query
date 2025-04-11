import { Product } from '@/entity/product/types'

export interface GetAllProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
