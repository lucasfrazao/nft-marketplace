import { HeroSection } from '../../components/HeroSection'
import { PageDefault } from '../../components/PageDefault'
import { Container } from './styles'

export function Home() {
  return (
    <PageDefault>
      <Container>
        <HeroSection />
      </Container>
    </PageDefault>
  )
}
