import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '../schema'

export function useSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      gender: 'none'
    }
  })

  return {
    register,
    handleSubmit,
    isValid,
    errors
  }
}
