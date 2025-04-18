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
  const baseURL = `/api/products`
  const limit = QUERY_CONFIG.PRODUCTS_LIMIT

  const params = new URLSearchParams()
  params.set('limit', limit.toString())
  params.set('skip', pageParam.toString())

  if (sortBy) {
    params.set('sortBy', sortBy)
    params.set('order', 'desc')
  }

  let endpoint = baseURL

  if (keyword) {
    endpoint += `/search?q=${encodeURIComponent(keyword)}&${params.toString()}`
  } else {
    endpoint += `?${params.toString()}`
  }

  const response = await axios.get(endpoint)
  return response.data
}
