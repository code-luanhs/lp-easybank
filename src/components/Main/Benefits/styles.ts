import styled from 'styled-components';

import { THEME } from '../../../util/theme';

export const Section = styled.section`
  background-color: ${THEME.COLORS.LIGHT_GRAYISH_BLUE};
  position: relative;

  @media (min-width: 770px) {
    margin-top: -150px;
  }
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 770px) {
    text-align: center;
    padding: 100px 25px;
  }
`;

export const Title = styled.h2`
  font-size: ${THEME.FONTS.SIZE.XLARGE};
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  margin: 0;
`;

export const Content = styled.p`
  margin: 1.5rem 0 3rem;
  color: ${THEME.COLORS.GRAYISH_BLUE};
  line-height: 1.5;
`;

export const ListBenefits = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;