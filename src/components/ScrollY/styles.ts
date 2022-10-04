import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { THEME } from "../../util/theme";

export const BtnUp = styled.a`
  position: fixed;
  bottom: 50px;
  right: 25px;
  z-index: 1;
  cursor: pointer;
  transition: ${THEME.TRANSITION.DEFAULT};
  z-index: 10;

  @media (max-width: 770px) {
    right: 15px;
  }
`;

export const IconTop = styled(BsFillArrowUpCircleFill)`
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: #2bc5c5;

  &:hover {
    color: ${THEME.COLORS.LIME_GREEN};
  }
`;
