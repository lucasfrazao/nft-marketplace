import { RocketLaunch, Eye } from 'phosphor-react'

import { Button } from '../../components/Button'
import { CardCollection } from '../../components/CardCollection'
import { HeroSection } from '../../components/HeroSection'
import { PageDefault } from '../../components/PageDefault'

import { CardArtists } from '../../components/CardArtists'
import { CardCategories } from '../../components/CardCategories'
import { CardNft } from '../../components/CardNft'

import {
  Container,
  TrendingCollection,
  TopCreators,
  BrowseCategories,
  DiscoverNfts
} from './styles'

import { artists } from '../../data/artists'
import { ArtistProps } from '../../utils/interfaces'
import { categories } from '../../data/categories'

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

  console.log(artists)

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
            {artists
              .filter(artist => artist.ranking < 9)
              .map(artist => (
                <CardArtists
                  key={artist.id}
                  ranking={artist.ranking}
                  avatarUrl={artist.avatarUrl}
                  name={artist.name}
                  totalSales={artist.totalSales}
                />
              ))}
          </div>
        </TopCreators>

        <BrowseCategories>
          <h2>Browse Categories</h2>

          <div className="categories">
            {categories.map(categorie => (
              <CardCategories
                key={categorie.id}
                name={categorie.name}
                image={categorie.image}
              />
            ))}
          </div>
        </BrowseCategories>

        <DiscoverNfts>
          <header>
            <div className="text">
              <h2>Discover More NFTs</h2>
              <span>Explore new trending NFTs</span>
            </div>

            <Button size="large" variant="outlined">
              <Eye size={20} /> See All
            </Button>
          </header>

          <div className="items-nft">
            <CardNft />
            <CardNft />
            <CardNft />
          </div>
        </DiscoverNfts>
      </Container>
    </PageDefault>
  )
}
