import styled from 'styled-components';

import backgroundImage from '../../../assets/bg-intro-desktop.svg';

import { THEME } from '../../../util/theme';

export const Section = styled.section`
  background:
    url(${backgroundImage})
    no-repeat
    calc(100% + 230px) calc(100% - 30px)
    ${THEME.COLORS.VERY_LIGHT};
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 150px 0 375px;
`;

export const Content = styled.div`
  max-width: 400px;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-size: ${THEME.FONTS.SIZE.XXLARGE};
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${THEME.FONTS.SIZE.LARGE};
  color: ${THEME.COLORS.GRAYISH_BLUE};
  line-height: 1.5;
  margin: 1rem 0 2rem;
`;

export const Image = styled.img`
  position: absolute;
  top: -120px;
  right: -130px;
  z-index: 5;
`;
