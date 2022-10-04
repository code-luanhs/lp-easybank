import {
  InfoFooter,
  Container,
  Copyright,
  SwapperFooter,
  SocialIcons,
  SocialContats,
  Contats,
  SocialButton,
  Request,
  Facebook,
  Youtube,
  Twitter,
  Pinterest,
  Instagram,
  ImageEasybank,
  DivIcons,
  DivCopy,
} from "./styles";


import logo from "../../assets/logo-white.svg";
// import invite from "../../assets/icon-.svg";
import Button from "../Button";

function Footer() {
  return (
    <InfoFooter>
      <Container>
        <SwapperFooter>
          <SocialIcons>
            <ImageEasybank src={logo} alt="aa" />
            <DivIcons>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Youtube />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Pinterest />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </DivIcons>
          </SocialIcons>
          <SocialContats>
            <Contats href="#">About Us</Contats>
            <Contats href="#">Contact</Contats>
            <Contats href="#">Blog</Contats>
            <Contats href="#">Careers</Contats>
            <Contats href="#">Support</Contats>
            <Contats href="#">Privacy Policy</Contats>
          </SocialContats>
          <SocialButton>
            <Button
            link="#"
            text="Request Invite"
            />
            <DivCopy>
              <Copyright>₢ Easybank. All Rights Reserved</Copyright>
            </DivCopy>
          </SocialButton>
        </SwapperFooter>
      </Container>
    </InfoFooter>
  );
}

export default Footer;
