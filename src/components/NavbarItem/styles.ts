import styled from 'styled-components';

import { THEME } from '../../util/theme';

export const NavItem = styled.li`

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