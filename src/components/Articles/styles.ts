import styled from "styled-components";
import { THEME } from "../../util/theme";

export const Title = styled.h1`
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  margin-left:50px;
  @media (max-width: 770px) {
   margin-left:0;
  }
`;
export const Container = styled.div`
  background: ${THEME.COLORS.VERY_LIGHT};
  display: flex;
  flex-direction: column;
  justify-content:center;
 
`;
export const Swapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.3rem;
  margin-left:50px;
  margin-right:50px;
  @media (max-width: 770px) {
   margin-left:15px;
   margin-right:15px;
  }
`;
export const TitleDiv = styled.div`
  margin: 0;
  @media (max-width: 770px) {
    text-align: center;
  }
`;
