import { useState } from "react";

import { Heading, Container, Button, ButtonNav } from "./styles";

import { motion } from "framer-motion";

import { Navbar } from "./Navbar";

import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-hamburger.svg";
import iconCloseMenu from "../../assets/icon-close.svg";

export function Header() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <Heading>
      <Container>
        <motion.img
          initial={{ opacity:0.7,scale: 0.3 }}
          animate={{ opacity:1,scale: 1 }}
          transition={{ duration: 1,delay:0.2 }}
          src={logo}
          alt="Logo"
        />

        <ButtonNav onClick={() => setMenuState(!menuActive)}>
          <img
            src={!menuActive ? iconMenu : iconCloseMenu}
            alt="Menu"
            loading="lazy"
          />
        </ButtonNav>

        <Navbar class={menuActive ? "active" : ""} />

        <Button
          initial={{ opacity:0.7,scale: 0.3 }}
          animate={{ opacity:1,scale: 1 }}
          transition={{ duration: 1,delay:0.2 }}
        >
          Request Invite
        </Button>
      </Container>
    </Heading>
  );
}

export default Header;
