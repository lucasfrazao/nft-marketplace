import styled from 'styled-components'

interface ButtonProps {
  size: 'small' | 'medium' | 'large'
  variant: 'contained' | 'outlined'
}

export const Container = styled.button<ButtonProps>`
  background: ${({ variant }) =>
    variant === 'contained' ? 'var(--purple)' : 'transparent'};

  border: ${({ variant }) =>
    variant === 'outlined' ? '1px solid var(--purple)' : 'none'};

  padding: ${({ size }) =>
    (size === 'small' && '20.5px 50px !important') ||
    (size === 'medium' && '10px 50px !important') ||
    (size === 'large' && '12px 50px !important')};

  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: 600;
  font-family: 'Work Sans';
  color: var(--white);

  gap: 0.625rem;
  border-radius: 0.625rem;

  max-width: 12.875rem;

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
