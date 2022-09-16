import styled from 'styled-components';

import { THEME } from '../../util/theme';

export const Link = styled.a`
  text-decoration: none;
  border-radius: 25px;
  padding: 15px 30px;
  color: ${THEME.COLORS.WHITE};
  background-image: ${THEME.COLORS.BUTTON};
  font-weight: ${THEME.FONTS.WEIGHT.BOLD};
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  transition: ${THEME.TRANSITION.DEFAULT};

  &:hover {
    opacity: .85;
  }
`;
