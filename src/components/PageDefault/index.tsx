import { ReactNode } from 'react'

import { Navigation } from '../Navigation'
import { Container, Main } from './styles'

interface PageDefaultProps {
  children: ReactNode
}

export function PageDefault({ children }: PageDefaultProps) {
  return (
    <Container>
      <Navigation />
      <Main>{children}</Main>
    </Container>
  )
}
