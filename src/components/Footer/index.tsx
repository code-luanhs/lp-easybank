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
import Button from "../Button";

function Footer() {
  return (
    <Container>
      <SwapperFooter>
        <SocialIcons>
          <ImageEasybank src={logo} alt="aa" />
          <DivIcons>
            <a href="http://localhost:3000/#">
              <Facebook />
            </a>
            <a href="http://localhost:3000/#">
              <Youtube />
            </a>
            <a href="http://localhost:3000/#">
              <Twitter />
            </a>
            <a href="http://localhost:3000/#">
              <Pinterest />
            </a>
            <a href="http://localhost:3000/#">
              <Instagram />
            </a>
          </DivIcons>
        </SocialIcons>
        <SocialContats>
          <Contats>About Us</Contats>
          <Contats>Contact</Contats>
          <Contats>Blog</Contats>
          <Contats>Careers</Contats>
          <Contats>Support</Contats>
          <Contats>Privacy Policy</Contats>
        </SocialContats>
        <SocialButton>
          <Button
          link="http://localhost:3000/#"
          text="Request Invite"
          />
          <DivCopy>
            <Copyright>₢ Easybank. All Rights Reserved</Copyright>
          </DivCopy>
        </SocialButton>
      </SwapperFooter>
    </Container>
  );
}

export default Footer;
