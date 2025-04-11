import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Product } from '../type'

interface GetAllProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const limit = 12
const initialPage = 0
const staleTime = 1000 * 60 * 2

const fetchProducts = async ({
  pageParam = initialPage
}): Promise<GetAllProductsResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/products?limit=${limit}&skip=${pageParam}`
  )
  return response.data
}

export const useProductsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: initialPage,
    getNextPageParam: lastPage => {
      const nextSkip = lastPage.skip + lastPage.limit
      return nextSkip < lastPage.total ? nextSkip : undefined
    },
    staleTime,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
}
