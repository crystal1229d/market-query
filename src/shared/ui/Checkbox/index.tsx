import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputClassName?: string
  labelClassName?: string
}

export default function Checkbox({
  label,
  inputClassName,
  labelClassName,
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
        className={clsx(styles.checkbox, inputClassName)}
        {...rest}
      />
      {label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}
    </label>
  )
}
