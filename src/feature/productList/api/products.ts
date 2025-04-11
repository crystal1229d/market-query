import axios from 'axios'
import { GetAllProductsResponse } from '../type'
import { QUERY_CONFIG } from '@/constant'

export const fetchProducts = async ({
  pageParam = QUERY_CONFIG.INITIAL_PAGE
}): Promise<GetAllProductsResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products?limit=${QUERY_CONFIG.PRODUCTS_LIMIT}&skip=${pageParam}`
  )
  return response.data
}
