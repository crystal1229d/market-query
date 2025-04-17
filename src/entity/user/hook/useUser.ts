import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api'
import { QUERY_CONFIG } from '@/shared/config'

export const useUser = (userId: number = 1) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: QUERY_CONFIG.STALE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
}
