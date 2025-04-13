import axios from 'axios'
import { QUERY_CONFIG } from '@/shared/config'
import { GetAllProductsResponse } from '@product/type'

export const fetchProducts = async ({
  pageParam = QUERY_CONFIG.INITIAL_PAGE
}): Promise<GetAllProductsResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products?limit=${QUERY_CONFIG.PRODUCTS_LIMIT}&skip=${pageParam}`
  )
  return response.data
}
