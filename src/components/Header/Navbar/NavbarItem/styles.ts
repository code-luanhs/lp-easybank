import styled from "styled-components";

import { THEME } from "../../../../util/theme";

import { motion } from "framer-motion";

export const NavItem = styled(motion.li)`
  position: relative;

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(100% + 21px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-image: ${THEME.COLORS.BUTTON};
    transition: ${THEME.TRANSITION.DEFAULT};
  }

  @media (max-width: 770px) {
    padding-bottom: 15px;
    margin-bottom: 15px;

    &::before {
      top: 100%;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  color: ${THEME.COLORS.GRAYISH_BLUE};
  transition: ${THEME.TRANSITION.DEFAULT};

  &:hover {
    color: ${THEME.COLORS.DARK_BLUE};
  }

  @media (max-width: 770px) {
    color: ${THEME.COLORS.DARK_BLUE};
    font-size: ${THEME.FONTS.SIZE.LARGE};
  }
`;
