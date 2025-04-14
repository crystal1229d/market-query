import { InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.css'
import clsx from 'clsx'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

export default function Checkbox({
  label,
  className,
  id,
  ...rest
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <label
      htmlFor={checkboxId}
      className={styles.wrapper}>
      <input
        type="checkbox"
        id={checkboxId}
        className={clsx(styles.checkbox, className)}
        {...rest}
      />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
