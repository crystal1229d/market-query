import { Product } from '@/entity/product/type'
import axios from 'axios'

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products/${id}`
  )
  return response.data
}
