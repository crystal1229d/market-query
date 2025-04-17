import { useForm } from 'react-hook-form'
import { signinSchema } from '../schema'
import { zodResolver } from '@hookform/resolvers/zod'

export function useSigninForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    resolver: zodResolver(signinSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  return {
    register,
    handleSubmit,
    isValid,
    errors
  }
}
