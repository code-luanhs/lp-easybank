import styled from "styled-components";

import backgroundImage from "../../../assets/bg-intro-desktop.svg";

import { THEME } from "../../../util/theme";

import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  background: url(${backgroundImage}) no-repeat 100% 0
    ${THEME.COLORS.VERY_LIGHT};
  position: relative;
  overflow: hidden;
  background-position: 51rem -15rem;
  background-size: 1175px;

  @media (max-width: 1440px) {
    background-position: 36rem -15rem;
  }

  @media (max-width: 770px) {
    background-position: 35% -35rem;
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 150px 30px 375px;

  @media (max-width: 770px) {
    text-align: center;
    padding: 25rem 25px 80px;
  }
`;

export const Content = styled(motion.div)`
  max-width: 400px;
  margin-right: auto;

  @media (max-width: 770px) {
    margin: 0 auto;
  }
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

export const Image = styled(motion.img)`
  position: absolute;
  top: -120px;
  right: -130px;
  z-index: 5;

  @media (max-width: 770px) {
    top: -150px;
    right: 50%;
    transform: translateX(50%) !important;
    width: 100%;
    max-width: 425px;
  }
`;
