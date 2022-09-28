import styled from 'styled-components';
import { THEME } from '../../util/theme';

export const Title = styled.h1`
  margin-left:55px;
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
`;
export const Container = styled.div`
 background: ${THEME.COLORS.VERY_LIGHT};
 display:flex;
 flex-direction:column;
`;
export const Swapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
gap:2.3rem;
padding:0px 55px 0px 55px; 

`;
export const TitleDiv = styled.div`

`;
