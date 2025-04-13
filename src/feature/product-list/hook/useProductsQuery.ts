import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api'
import { QUERY_CONFIG } from '@/shared/config'

export const useProductsQuery = (sortBy?: 'discountPercentage' | 'rating') => {
  return useInfiniteQuery({
    queryKey: ['products', sortBy],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam, sortBy }),
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
