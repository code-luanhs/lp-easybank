import {
  InfoFooter,
  Container,
  Copyright,
  SwapperFooter,
  SocialIcons,
  SocialContats,
  Contats,
  SocialButton,
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
  
  const cardVariants2 = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        delay: 0.3,
      },
    },
  };
  const cardVariants4 = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  const cardVariants3 = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        delay: 0.3,
      },
    },
  };
  return (
    <InfoFooter>
      <Container
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <SwapperFooter>
          <SocialIcons>
            <ImageEasybank variants={cardVariants2} src={logo} alt="aa" />
            <DivIcons variants={cardVariants2}>
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
            <Contats variants={cardVariants3} href="#">
              About Us
            </Contats>
            <Contats variants={cardVariants3} href="#">
              Contact
            </Contats>
            <Contats variants={cardVariants3} href="#">
              Blog
            </Contats>
            <Contats variants={cardVariants3} href="#">
              Careers
            </Contats>
            <Contats variants={cardVariants3} href="#">
              Support
            </Contats>
            <Contats variants={cardVariants3} href="#">
              Privacy Policy
            </Contats>
          </SocialContats>
          <SocialButton variants={cardVariants4}>
            <Button link="#" text="Request Invite" />
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
