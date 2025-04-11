import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Product } from '../type'

interface GetAllProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const fetchProducts = async ({
  pageParam = 0
}): Promise<GetAllProductsResponse> => {
  const limit = 12
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products?limit=${limit}&skip=${pageParam}`
  )
  return response.data
}

export const useProductsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      const nextSkip = lastPage.skip + lastPage.limit
      return nextSkip < lastPage.total ? nextSkip : undefined
    }
  })
}
