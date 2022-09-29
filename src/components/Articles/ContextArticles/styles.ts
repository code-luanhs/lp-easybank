import styled from "styled-components";
import { THEME } from "../../../util/theme";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  background: ${THEME.COLORS.WHITE};
  border-radius: 6px;
  :hover {
    scale: 1.01;
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
export const ImageArticle = styled.img`
  width: 100%;
  height: 280px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
`;
export const Swapper = styled.div`
  padding: 10px;
`;
export const By = styled.span`
  font-size: 14px;
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
`;
export const Title = styled.h1`
  font-size: 22px;
  color: ${THEME.COLORS.DARK_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.REGULAR};
  cursor: pointer;
`;
export const Context = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
`;
