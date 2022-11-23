import styled from 'styled-components'

export const Container = styled.nav`
  background-color: var(--black-dark);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.25rem;
  padding: 1.25rem 3.125rem;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.9rem;

    > span {
      font-family: 'Space Mono';
      font-weight: 600;
      color: var(--white);
    }
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
  }

  .options a {
    color: #fff;
    text-decoration: none;
    padding: 12px 20px;

    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
  }
`
