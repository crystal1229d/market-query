import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api'
import { DEFAULT_USER_ID, QUERY_CONFIG } from '@/shared/config'

export const useUser = (userId: number = DEFAULT_USER_ID) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: QUERY_CONFIG.STALE_TIME,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
}
