import { DEFAULT_USER_ID } from '@/shared/config'
import { useQuery } from '@tanstack/react-query'
import { fetchCartByUserId } from '../api'

export function useCartQuery(userId: number = DEFAULT_USER_ID) {
  return useQuery({
    queryKey: ['cart', userId],
    queryFn: () => fetchCartByUserId(userId)
  })
}
