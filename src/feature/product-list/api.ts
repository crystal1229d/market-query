import axios from 'axios'
import { QUERY_CONFIG } from '@/shared/config'
import { GetAllProductsResponse } from '@product/type'

interface Props {
  sortBy?: 'discountPercentage' | 'rating'
  pageParam?: number
}

export const fetchProducts = async ({
  sortBy,
  pageParam = QUERY_CONFIG.INITIAL_PAGE
}: Props): Promise<GetAllProductsResponse> => {
  const limit = QUERY_CONFIG.PRODUCTS_LIMIT
  const skip = pageParam
  const order = 'desc'

  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products?limit=${limit}&skip=${skip}&sortBy=${sortBy ?? 'default'}&order=${order}`
  )

  return response.data
}
