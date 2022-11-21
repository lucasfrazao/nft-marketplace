import { Container } from './styles'

export function Navigation() {
  return (
    <Container>
      <img src="/src/assets/logo.svg" alt="logo nft marketplace" />

      <div className="options">
        <a href="">Marketplace</a>
        <a href="">Rankings</a>
        <a href="">Connect a wallet</a>
        <a href="">Sign Up</a>
      </div>
    </Container>
  )
}
