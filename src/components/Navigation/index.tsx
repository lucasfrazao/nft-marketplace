import { User } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from './styles'

export function Navigation() {
  return (
    <Container>
      <img src="/src/assets/logo.svg" alt="logo nft marketplace" />

      <div className="options">
        <a href="">Marketplace</a>
        <a href="">Rankings</a>
        <a href="">Connect a wallet</a>
        <Button size="medium" variant="contained">
          <User size={20} />
          Sign Up
        </Button>
      </div>
    </Container>
  )
}
