import { Button } from '../../components/Button'
import { CardCollection } from '../../components/CardCollection'
import { HeroSection } from '../../components/HeroSection'
import { PageDefault } from '../../components/PageDefault'

import { RocketLaunch } from 'phosphor-react'

import { Container, TrendingCollection, TopCreators } from './styles'
import { CardArtists } from '../../components/CardArtists'

export function Home() {
  const data = {
    imageNftHighlight:
      'https://fiverrbox.com/wp-content/uploads/2021/12/nft-art-design.jpg-9e5594cc.jpg',
    imagesNft: [
      'https://nftkreator.com/images/3d/3d-4.png',
      'https://meshaffair.com/wp-content/uploads/2022/06/nft-artss-654x600.png'
    ],
    totalNft: 1025,
    nameCollection: 'Space Walking'
  }

  return (
    <PageDefault>
      <Container>
        <HeroSection />

        <TrendingCollection>
          <h2>Trending Collection</h2>
          <span>Checkout our weekly updated trending collection.</span>

          <div className="collection-cards">
            <CardCollection
              imageNftHighlight={data.imageNftHighlight}
              imagesNft={data.imagesNft}
              totalNft={data.totalNft}
              nameCollection={data.nameCollection}
            />
            <CardCollection
              imageNftHighlight={data.imageNftHighlight}
              imagesNft={data.imagesNft}
              totalNft={data.totalNft}
              nameCollection={data.nameCollection}
            />
            <CardCollection
              imageNftHighlight={data.imageNftHighlight}
              imagesNft={data.imagesNft}
              totalNft={data.totalNft}
              nameCollection={data.nameCollection}
            />
          </div>
        </TrendingCollection>

        <TopCreators>
          <header>
            <div className="text">
              <h2>Top creators</h2>
              <span>Checkout Top Rated Creators on the NFT Marketplace</span>
            </div>

            <Button size="large" variant="outlined">
              <RocketLaunch size={20} /> View Rankings
            </Button>
          </header>

          <div className="artists-cards">
            <CardArtists />
            <CardArtists />
            <CardArtists />
            <CardArtists />
            <CardArtists />
            <CardArtists />
            <CardArtists />
            <CardArtists />
          </div>
        </TopCreators>
      </Container>
    </PageDefault>
  )
}
