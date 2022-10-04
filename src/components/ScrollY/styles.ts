import { RiArrowUpCircleLine } from 'react-icons/ri';
import styled from 'styled-components';
import { THEME } from '../../util/theme';

export const BtnUp = styled.a`
  position:fixed;
bottom:9rem;
left:97%;
   z-index: 1;
   cursor: pointer;
   transition: ${THEME.TRANSITION.DEFAULT};
   @media (max-width: 770px) {
    left:50%;
    display:none;
  }
`;

export const IconTop = styled(RiArrowUpCircleLine)`
height:40px;
width: 40px;
color: ${THEME.COLORS.LIME_GREEN};
cursor:pointer;

`;