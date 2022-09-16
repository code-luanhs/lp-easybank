import styled from 'styled-components';

import { THEME } from '../../util/theme';

export const Heading = styled.header`
  position: relative;
  background-color: ${THEME.COLORS.WHITE};
  z-index: 5;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 15px;
`;