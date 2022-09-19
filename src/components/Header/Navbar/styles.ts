import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 770px) {
    display: none;
  }
`;