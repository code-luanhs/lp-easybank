import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { THEME } from "../../util/theme";

export const BtnUp = styled.a`
  position: fixed;
  bottom: 9rem;
  left: 97%;
  z-index: 1;
  cursor: pointer;
  transition: ${THEME.TRANSITION.DEFAULT};
  @media (max-width: 770px) {
    left: 50%;
    display: none;
  }
`;

export const IconTop = styled(BsFillArrowUpCircleFill)`
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: #2bc5c5;
`;
