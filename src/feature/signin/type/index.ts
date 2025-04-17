import { z } from 'zod'
import { signinSchema } from '../schema'

export type SigninFormInput = z.infer<typeof signinSchema>
