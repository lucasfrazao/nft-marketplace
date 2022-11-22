import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 240px;
  height: 316px;
  border-radius: 0.675rem;

  background-image: url('https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  svg {
    color: var(--white);

    margin-top: 70px;
  }

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
