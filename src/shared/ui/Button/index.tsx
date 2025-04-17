import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline'
}

export default function Button({
  children,
  className,
  disabled,
  type = 'button',
  variant = 'default',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        styles.button,
        variant === 'outline' && styles.outline,
        disabled && styles.disabled,
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
