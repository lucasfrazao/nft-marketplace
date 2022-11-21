import styled from 'styled-components'

export const Container = styled.div``

export const TrendingCollection = styled.div`
  font-family: 'Work Sans', sans-serif;

  margin: 5rem 0 3.75rem;

  h2 {
    font-weight: 600;
    color: var(--white);
  }

  span {
    font-weight: 400;
    color: var(--white);
  }

  .collection-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 60px 0 80px;
  }
`
