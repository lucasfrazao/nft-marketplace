import { Container, DetailsCollection } from './styles'

interface NftCardProps {
  imageNftHighlight: string
  imagesNft: string[]
  totalNft: number
  nameCollection: string
}

export function CardCollection({
  imageNftHighlight,
  imagesNft,
  totalNft,
  nameCollection
}: NftCardProps) {
  return (
    <Container>
      <img
        className="nft-highlight"
        src={imageNftHighlight}
        alt="nft highlight"
      />

      <div className="list-nfts">
        <img src={imagesNft[0]} alt="nft image" />

        <img src={imagesNft[1]} alt="nft image" />

        <span>{totalNft}</span>
      </div>

      <DetailsCollection>
        <span className="name-collection">{nameCollection}</span>
        <div className="identify-artist">
          <img
            src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="avatar user"
          />
          <span>by Animakid</span>
        </div>
      </DetailsCollection>
    </Container>
  )
}
