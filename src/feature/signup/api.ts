import axios from 'axios'
import { SignupFormInput } from './type'

export const signup = async (data: SignupFormInput) => {
  const response = await axios.post(`/api/users/add`, data)
  return response.data
}
