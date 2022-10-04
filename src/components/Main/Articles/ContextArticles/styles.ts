import styled from "styled-components";
import { THEME } from "../../../../util/theme";

export const Container = styled.div`
  margin: 40px 0;
  background: ${THEME.COLORS.WHITE};
  border-radius: 6px;

  @media (max-width: 770px) {
    margin: 0;
  }
`;
export const ImageArticle = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

`;
export const Swapper = styled.div`
  padding: 10px;
  display:flex;
  flex-direction: column;
`;

export const DivImg = styled.div`
  width:100%;
  height:280px;
`;
export const By = styled.span`
  font-size: 14px;
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
  margin-top:10px;

`;
export const Title = styled.a`
  font-size: 22px;
  color: ${THEME.COLORS.DARK_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  text-decoration:none;
  transition: ${THEME.TRANSITION.DEFAULT};
  margin-top:10px;
  margin-bottom:5px;

  &:hover{
    color: ${THEME.COLORS.GRAYISH_BLUE};
  }
`;
export const Context = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
  margin-bottom:10px;
`;
