import styled from "styled-components";
import { motion } from "framer-motion";

import { THEME } from "../../util/theme";

export const Heading = styled.header`
  position: relative;
  background-color: ${THEME.COLORS.WHITE};
  z-index: 10;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 30px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 770px) {
    padding: 25px;
    height: 70px;
  }
`;

export const Button = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  padding: 12px 30px;
  color: ${THEME.COLORS.WHITE};
  background-image: ${THEME.COLORS.BUTTON};
  font-weight: ${THEME.FONTS.WEIGHT.BOLD};
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  transition: ${THEME.TRANSITION.DEFAULT};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
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
