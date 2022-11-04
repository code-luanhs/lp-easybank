import styled from "styled-components";

import { THEME } from "../../util/theme";

import { motion } from "framer-motion";

export const Link = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  padding: 12px 30px;
  color: ${THEME.COLORS.WHITE};
  background-image: ${THEME.COLORS.BUTTON};
  font-weight: ${THEME.FONTS.WEIGHT.BOLD};
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  transition: ${THEME.TRANSITION.DEFAULT};

  &:hover {
    opacity: 0.8;
  }
`;
