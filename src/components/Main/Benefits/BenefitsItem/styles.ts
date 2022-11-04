import styled from "styled-components";

import { THEME } from "../../../../util/theme";

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  margin: 2rem 0;
  color: ${THEME.COLORS.DARK_BLUE};
`;

export const Content = styled.p`
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-size: ${THEME.FONTS.SIZE.LARGE};
  margin: 0;
  line-height: 1.5;
`;
