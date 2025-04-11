import { useQuery } from '@tanstack/react-query'
import { Product } from '@/entity/product/types'
import { QUERY_CONFIG } from '@/constant'
import { fetchProductById } from '../api'

export const useProductQuery = (id: number) => {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    staleTime: QUERY_CONFIG.STALE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!id
  })
}
