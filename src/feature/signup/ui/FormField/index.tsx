/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, FieldErrors, UseFormRegisterReturn } from 'react-hook-form'
import styles from './FormField.module.css'

interface Props {
  label: string
  required?: boolean
  placeholder?: string
  type?: string
  register?: UseFormRegisterReturn
  error?: any | FieldError | FieldErrors
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
      {error && 'message' in error && (
        <p className={styles.errorMessage}>{error.message?.toString()}</p>
      )}
    </div>
  )
}
