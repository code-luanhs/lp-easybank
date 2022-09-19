import styled from 'styled-components';

import { THEME } from '../../../util/theme';

export const Section = styled.section`
  background-color: ${THEME.COLORS.LIGHT_GRAYISH_BLUE};
  position: relative;
  margin-top: -150px;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const ListBenefits = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`;