import {
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

import logo from "../../assets/logo.svg";
import invite from "../../assets/icon-.svg";

function Footer() {
  return (
    <Container>
      <SwapperFooter>
        <SocialIcons>
          <ImageEasybank src={logo} alt="aa" />
          <DivIcons>
            <a href="https://github.com/pablokaliel">
              <Facebook />
            </a>
            <a href="https://github.com/pablokaliel">
              <Youtube />
            </a>
            <a href="https://github.com/pablokaliel">
              <Twitter />
            </a>
            <a href="https://github.com/pablokaliel">
              <Pinterest />
            </a>
            <a href="https://github.com/pablokaliel">
              <Instagram />
            </a>
          </DivIcons>
        </SocialIcons>
        <SocialContats>
          <Contats>About Us</Contats>
          <Contats>Contact</Contats>
          <Contats>Blog</Contats>
          <Contats>Careers</Contats>
          <Contats>Suport</Contats>
          <Contats>Privacy Policy</Contats>
        </SocialContats>
        <SocialButton>
          <Request>Request Invite</Request>
          <DivCopy>
            <Copyright>Easybank. All Rights Reserved</Copyright>
          </DivCopy>
        </SocialButton>
      </SwapperFooter>
    </Container>
  );
}

export default Footer;
