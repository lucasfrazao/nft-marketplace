import { ReactNode } from 'react'

import { Navigation } from '../Navigation'
import { Container } from './styles'

interface PageDefaultProps {
  children: ReactNode
}

export function PageDefault({ children }: PageDefaultProps) {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}
