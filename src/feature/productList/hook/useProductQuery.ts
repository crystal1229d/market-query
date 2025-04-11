import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '../api/product'
import { QUERY_CONFIG } from '@/constant'

export const useProductQuery = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    staleTime: QUERY_CONFIG.STALE_TIME,
    enabled: !!id
  })
}
