import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/products'
import { QUERY_CONFIG } from '@/constant'

export const useProductsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: QUERY_CONFIG.INITIAL_PAGE,
    getNextPageParam: lastPage => {
      const nextSkip = lastPage.skip + lastPage.limit
      return nextSkip < lastPage.total ? nextSkip : undefined
    },
    staleTime: QUERY_CONFIG.STALE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
}
