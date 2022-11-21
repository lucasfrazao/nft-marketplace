import { Container } from './styles'

export function CardArtists() {
  return (
    <Container>
      <div>
        <span className="rank-artist">1</span>
        <img
          src="https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg"
          alt="avatar"
        />
      </div>
      <span className="name">Keepitreal</span>
      <div className="value-sale">
        <span>Total Sales: </span>
        <span className="value-total-sales">&nbsp;34.53 ETH</span>
      </div>
    </Container>
  )
}
