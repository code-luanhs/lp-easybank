import styled from 'styled-components';

import { THEME } from '../../util/theme';

export const Heading = styled.header`
  position: relative;
  background-color: ${THEME.COLORS.WHITE};
  z-index: 10;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 15px;

  @media (max-width: 770px) {
    padding: 25px;
    height: 70px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  padding: 12px 30px;
  color: ${THEME.COLORS.WHITE};
  background-image: ${THEME.COLORS.BUTTON};
  font-weight: ${THEME.FONTS.WEIGHT.BOLD};
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  transition: ${THEME.TRANSITION.DEFAULT};

  &:hover {
    opacity: .8;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const ButtonNav = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;

  @media (min-width: 770px) {
    display: none;
  }
`;