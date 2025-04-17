import { z } from 'zod'
import { SignupSchema } from '../schema'

export type SignupFormInput = z.infer<typeof SignupSchema>

export type UserCreatePayload = {
  username: string
  password: string
  name: string
  phone: string
  gender: string
  email: string
  birthDate: string
}
