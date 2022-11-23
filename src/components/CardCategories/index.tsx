import { Container } from './styles'

interface CardCategoriesProps {
  name: string
  image: string
}

export function CardCategories({ image, name }: CardCategoriesProps) {
  return (
    <Container image={image}>
      <span>{name}</span>
    </Container>
  )
}
