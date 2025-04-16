import axios from 'axios'
import { SignupFormInput } from './type'

export const signup = async (data: SignupFormInput) => {
  const response = await axios.post(
    `${import.meta.env.VITE_DUMMYJSON_BASE_URL}/users/add`,
    data
  )
  return response.data
}
