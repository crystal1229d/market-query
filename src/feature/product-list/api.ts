import axios from 'axios'
import { QUERY_CONFIG } from '@/shared/config'
import { GetAllProductsResponse } from '@product/type'

interface Props {
  sortBy?: 'discountPercentage' | 'rating'
  pageParam?: number
  keyword?: string
}

export const fetchProducts = async ({
  sortBy,
  pageParam = QUERY_CONFIG.INITIAL_PAGE,
  keyword
}: Props): Promise<GetAllProductsResponse> => {
  const baseURL = `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products`
  const limit = QUERY_CONFIG.PRODUCTS_LIMIT

  let query = `?limit=${limit}&skip=${pageParam}`

  if (sortBy) {
    query += `&sort=${sortBy}&order=desc`
  }

  if (keyword) {
    query += `&q=${encodeURIComponent(keyword)}`
  }

  const response = await axios.get(`${baseURL}${query}`)
  return response.data
}
