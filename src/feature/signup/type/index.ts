import { z } from 'zod'
import { SignupSchema } from '../schema'

export type SignupFormInput = z.infer<typeof SignupSchema>
// export type SignupFormInput = {
//   username?: string
//   password?: string
//   confirmPassword?: string
//   name?: string
//   phone?: string
//   emailId?: string
//   emailDomain?: string
//   birthYear?: string
//   birthMonth?: string
//   birthDay?: string
//   gender: 'male' | 'female' | 'none'
// }

export type UserCreatePayload = {
  username: string
  password: string
  name: string
  phone: string
  gender: string
  email: string
  birthDate: string
}
