import axios from 'axios'
import { User } from '../type'

export const signup = async (data: User) => {
  const response = await axios.post(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/users/add`,
    data
  )
  return response.data
}

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
