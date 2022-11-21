import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 67.5rem;

  gap: 1.875rem;

  margin-top: 5rem;

  font-family: 'Work Sans', sans-serif;
  color: var(--white);

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .statics-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.875rem;

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 510px;

  .details {
    background-color: var(--black-medium);
    padding: 1.25rem;
    border-radius: 0 0 0.625rem 0.625rem;
  }

  .identify-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.625rem;
  }

  .identify-user > img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
`
