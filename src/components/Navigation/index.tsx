import { Storefront, User } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from './styles'

export function Navigation() {
  return (
    <Container>
      <div className="logo">
        <Storefront size={40} />
        <span>NFT Marketplace</span>
      </div>

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
