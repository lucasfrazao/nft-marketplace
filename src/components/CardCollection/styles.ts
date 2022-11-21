import styled from 'styled-components'

export const Container = styled.div`
  width: 330px;

  .nft-highlight {
    height: 330px;
    margin-bottom: 15px;
    border-radius: 0.625rem;
  }

  .list-nfts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .list-nfts img {
    width: 90px;
    height: 90px;

    border-radius: 0.625rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 90px;
    border-radius: 0.625rem;

    font-family: 'Space Mono';
    font-weight: 700;
    background: var(--purple);
  }
`

export const DetailsCollection = styled.div`
  margin-top: 15px;

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: auto;

    font-family: 'Work Sans';
    font-weight: bold;
    background: none !important;
  }

  .identify-artist {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.625rem;
    margin-top: 0.625rem;

    > span {
      font-weight: normal;
    }
  }

  .identify-artist > img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
`
