import styled from "styled-components";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { THEME } from "../../util/theme";

export const Container = styled.div`
  background: ${THEME.COLORS.DARK_BLUE};
  height: 140px;
  @media (max-width: 770px) {
    height: 445px;
  }
`;

export const Copyright = styled.span`
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  color: ${THEME.COLORS.GRAYISH_BLUE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
`;

export const SwapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px 0px 70px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 37px;
  }
`;

export const SocialContats = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 30px 0px 0px 0px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 20px;
  }
`;
export const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;
export const DivCopy = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export const Contats = styled.li`
  color: ${THEME.COLORS.LIGHT_GRAYISH_BLUE};
  cursor: pointer;
  font-size: ${THEME.FONTS.SIZE.LARGE};
  font-weight: ${THEME.FONTS.WEIGHT.LIGHT};
  padding: 0px 50px 0px 50px;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
  
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
`;

export const SocialButton = styled.div`
  padding: 30px 70px 0px 0px;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 20px;
  }
`;

export const Request = styled.a`
  display: inline-block;
  text-decoration: none;
  border-radius: 25px;
  padding: 12px 30px;
  color: ${THEME.COLORS.WHITE};
  background-image: ${THEME.COLORS.BUTTON};
  font-weight: ${THEME.FONTS.WEIGHT.BOLD};
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  transition: ${THEME.TRANSITION.DEFAULT};
  cursor: pointer;
  @media (max-width: 770px) {
    text-align: center;
    max-width: 180px;
    border-radius: 25px;
    padding: 12px 30px;
  }
`;
export const Icons = styled.a``;
export const ImageEasybank = styled.img`
`;

export const Facebook = styled(BsFacebook)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
export const Instagram = styled(BsInstagram)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
export const Youtube = styled(BsYoutube)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
export const Twitter = styled(BsTwitter)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
export const Pinterest = styled(BsPinterest)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color: ${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
