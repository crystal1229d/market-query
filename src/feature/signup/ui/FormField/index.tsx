import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import styles from './FormField.module.css'

interface Props {
  label: string
  required?: boolean
  placeholder?: string
  type?: string
  register?: UseFormRegisterReturn
  error?: FieldError
}
export default function FormField({
  label,
  required = false,
  placeholder,
  type = 'text',
  register,
  error
}: Props) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        className={`${styles.input} ${error ? styles.error : ''}`}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  )
}
