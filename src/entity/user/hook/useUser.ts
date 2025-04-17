import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api'

export const useUser = (userId: number = 1) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId)
  })
}
