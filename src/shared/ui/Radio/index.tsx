import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Radio.module.css'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputClassName?: string
  labelClassName?: string
}

export default function Radio({
  label,
  inputClassName,
  labelClassName,
  id,
  ...rest
}: RadioProps) {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
  return (
    <label
      htmlFor={radioId}
      className={styles.wrapper}>
      <input
        type="radio"
        id={radioId}
        className={clsx(styles.radio, inputClassName)}
        {...rest}
      />
      {label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}
    </label>
  )
}
