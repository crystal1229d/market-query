import styles from './FormField.module.css'

export default function FormField({
  label,
  required = false,
  placeholder,
  type = 'text'
}: {
  label: string
  required?: boolean
  placeholder: string
  type?: string
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  )
}
