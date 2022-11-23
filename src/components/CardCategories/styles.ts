import styled from 'styled-components'

interface CardCategoriesProps {
  image: string
}

export const Container = styled.div<CardCategoriesProps>`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;

  width: 240px;
  height: 316px;
  border-radius: 0.675rem;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(253, 69, 86, 0) 100%
    ),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 76px;
    padding: 20px 30px;

    border-radius: 0 0 0.675rem 0.675rem;
    background: var(--black-medium);

    font-weight: 600;
  }
`
