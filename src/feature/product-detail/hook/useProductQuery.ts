import { useQuery } from '@tanstack/react-query'
import { Product } from '@product/type'
import { QUERY_CONFIG } from '@/shared/config'
import { fetchProductById } from '@feature/product-detail/api'

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
