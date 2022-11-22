import { Container } from './styles'

export function CardNft() {
  return (
    <Container>
      <img
        src="https://i.pinimg.com/originals/f3/80/bc/f380bce7ef45c283a3a20d3a72b2acd6.jpg"
        alt="image nft"
      />

      <section className="details-nft">
        <span className="name">Distant Galaxy</span>

        <div className="identify-artist">
          <img
            src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="avatar user"
          />
          <span>by Animakid</span>
        </div>

        <div className="values">
          <div className="price">
            <span className="title">Price</span>
            <span>1.63 ETH</span>
          </div>
          <div className="highest-bid">
            <span className="title">Highest Bid</span>
            <span>0.33 wETH</span>
          </div>
        </div>
      </section>
    </Container>
  )
}
