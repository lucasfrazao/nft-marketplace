import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  border-radius: 0.675rem;
  background: #3b3b3b;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    position: relative;
  }

  .rank-artist {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    position: absolute;
    left: -30px;
    top: -5px;

    border-radius: 50%;
    background-color: var(--black-light);
  }

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .name {
    font-weight: 600;
  }

  .value-sale {
    margin-top: 10px;
  }

  .value-sale > span:nth-child(1) {
    color: var(--black-light);
  }
`
