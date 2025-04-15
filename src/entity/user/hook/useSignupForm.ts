import { useForm } from 'react-hook-form'
import { SignupFormInput } from '../type'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '../schema'

export function useSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupFormInput>({
    resolver: zodResolver(SignupSchema)
  })

  return {
    register,
    handleSubmit,
    errors
  }
}
