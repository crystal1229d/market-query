import axios from 'axios'
import { Product } from '../type'

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products/${id}`
  )
  return response.data
}
