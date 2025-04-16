import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({
  children,
  className,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(styles.button, className, disabled && styles.disabled)}
      {...rest}>
      {children}
    </button>
  )
}
