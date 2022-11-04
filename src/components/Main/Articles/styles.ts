import styled from "styled-components";
import { THEME } from "../../../util/theme";
import { RiArrowUpCircleLine } from "react-icons/ri";

import { motion } from "framer-motion";

export const Section = styled.section`
  background: ${THEME.COLORS.VERY_LIGHT};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Title = styled(motion.h1)`
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
`;

export const Swapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.3rem;
`;

export const TitleDiv = styled(motion.div)`
  margin: 0;

  @media (max-width: 770px) {
    text-align: center;
  }
`;

export const DivTop = styled.div`
  position: fixed;
  bottom: 9rem;
  left: 97%;
`;

export const BtnTop = styled.a``;

export const IconTop = styled(RiArrowUpCircleLine)`
  height: 25px;
  width: 25px;
  color: ${THEME.COLORS.DARK_BLUE};
  cursor: pointer;
`;
