import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size: 'small' | 'medium' | 'large'
  variant: 'contained' | 'outlined'
}

export function Button({ children, size, variant }: ButtonProps) {
  return (
    <Container size={size} variant={variant}>
      {children}
    </Container>
  )
}
