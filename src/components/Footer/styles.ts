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
height:140px;

`;

export const Copyright = styled.span`
  font-size: ${THEME.FONTS.SIZE.DEFAULT};
  color:  ${THEME.COLORS.GRAYISH_BLUE};

`;

export const SwapperFooter = styled.div`
display:flex;
justify-content: space-between;
`;

export const SocialIcons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:30px 30px  0px 50px;
`;

export const SocialContats = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:1fr 1fr 1fr;
padding:30px 30px  0px 50px;

`;
export const DivIcons = styled.div`
display:flex;
justify-content: space-between;
width:100%;
margin-top:30px;

`;
export const DivCopy = styled.div`
display:flex;
justify-content: space-between;
width:100%;
margin-top:30px;

`;

export const Contats = styled.span`
color:${THEME.COLORS.LIGHT_GRAYISH_BLUE};
cursor:pointer;
font-size: ${THEME.FONTS.SIZE.BODY};
:hover {
    color:${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;

export const SocialButton = styled.div`
padding:30px 50px  0px 50px;
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
  cursor:pointer;

`;
export const Icons = styled.a`

`;
export const ImageEasybank = styled.img`
 
`;

export const Facebook = styled(BsFacebook)`
  color: ${THEME.COLORS.WHITE};
  height: 20px;
  width: 20px;
  margin-top: 6px;
  cursor: pointer;
  :hover {
    color:${THEME.COLORS.LIME_GREEN};
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
    color:${THEME.COLORS.LIME_GREEN};
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
    color:${THEME.COLORS.LIME_GREEN};
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
    color:${THEME.COLORS.LIME_GREEN};
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
    color:${THEME.COLORS.LIME_GREEN};
    transition: ${THEME.TRANSITION.DEFAULT};
  }
`;
