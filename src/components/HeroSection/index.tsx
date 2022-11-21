import { RocketLaunch } from 'phosphor-react'
import { Button } from '../Button'
import { Container, HighlightCard } from './styles'

export function HeroSection() {
  return (
    <Container>
      <div className="content">
        <h1>Discover digital art & Collect NFTs</h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <Button size="large" variant="contained">
          <RocketLaunch size={20} /> Get Started
        </Button>

        <div className="statics-group">
          <div className="total-sale">
            <span>240k+</span>
            <span>Total Sale</span>
          </div>
          <div className="auctions">
            <span>100k+</span>
            <span>Auctions</span>
          </div>
          <div className="artists">
            <span>240k</span>
            <span>Artists</span>
          </div>
        </div>
      </div>

      <HighlightCard>
        <img
          src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
          alt="highlight nft"
        />

        <div className="details">
          <span>Space Walking</span>

          <div className="identify-user">
            <img
              src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="avatar user"
            />
            <span>by Animakid</span>
          </div>
        </div>
      </HighlightCard>
    </Container>
  )
}
