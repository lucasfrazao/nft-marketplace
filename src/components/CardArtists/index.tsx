import { Container } from './styles'

interface CardArtistsProps {
  ranking: number
  name: string
  avatarUrl: string
  totalSales: number
}

export function CardArtists({
  ranking,
  name,
  avatarUrl,
  totalSales
}: CardArtistsProps) {
  return (
    <Container>
      <div>
        <span className="rank-artist">{ranking}</span>
        <img src={avatarUrl} alt="avatar" />
      </div>
      <span className="name">{name}</span>
      <div className="value-sale">
        <span>Total Sales: </span>
        <span className="value-total-sales">&nbsp; {totalSales} ETH</span>
      </div>
    </Container>
  )
}
