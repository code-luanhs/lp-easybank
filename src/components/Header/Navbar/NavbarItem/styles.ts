import styled from 'styled-components';

import { THEME } from '../../../../util/theme';

export const NavItem = styled.li`
  position: relative;

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-image: ${THEME.COLORS.BUTTON};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  color: ${THEME.COLORS.GRAYISH_BLUE};
  transition: ${THEME.TRANSITION.DEFAULT};

  &:hover {
    color: ${THEME.COLORS.DARK_BLUE};
  }
`;