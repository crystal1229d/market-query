import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api'
import { QUERY_CONFIG } from '@/shared/config'

interface Props {
  sortBy?: 'discountPercentage' | 'rating'
  keyword?: string
}

export const useProductsQuery = ({ sortBy, keyword }: Props) => {
  return useInfiniteQuery({
    queryKey: ['products', sortBy, keyword],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam, sortBy, keyword }),
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
