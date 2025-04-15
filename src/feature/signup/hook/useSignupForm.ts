import { useForm } from 'react-hook-form'

export function useSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return {
    register,
    handleSubmit,
    errors
  }
}
