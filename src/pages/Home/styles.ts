import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Work Sans', sans-serif;

  h2 {
    font-weight: 600;
    color: var(--white);
  }

  span {
    font-weight: 400;
    color: var(--white);
  }
`

export const TrendingCollection = styled.div`
  margin: 5rem 0 3.75rem;

  .collection-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 60px 0 80px;
  }
`

export const TopCreators = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .artists-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 30px;
    max-width: 1080px;

    margin: 60px 0 80px;
  }
`

export const BrowseCategories = styled.div`
  .categories {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 30px;
    max-width: 1080px;

    margin: 60px 0 80px;
  }
`
