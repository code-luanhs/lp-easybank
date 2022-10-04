import { RiArrowUpCircleLine } from 'react-icons/ri';
import styled from 'styled-components';
import { THEME } from '../../util/theme';

export const BtnUp = styled.a`
  position:fixed;
bottom:9rem;
left:97%;
   /* font-size: 3rem; */
   z-index: 1;
   cursor: pointer;
   color: ${THEME.COLORS.DARK_BLUE};

   transition: ${THEME.TRANSITION.DEFAULT};
`;

export const IconTop = styled(RiArrowUpCircleLine)`
height:40px;
width: 40px;
color: ${THEME.COLORS.DARK_BLUE};
cursor:pointer;

`;