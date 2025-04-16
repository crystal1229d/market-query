import axios from 'axios'

export const login = async (credentials: {
  username: string
  password: string
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/auth/login`,
    credentials
  )
  return response.data
}
