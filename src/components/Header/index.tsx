import { useState } from 'react';

import {
  Heading,
  Container,
  Button,
  ButtonNav
} from './styles';


import { Navbar } from './Navbar';

import logo from '../../assets/logo.svg';
import iconMenu from '../../assets/icon-hamburger.svg';
import iconCloseMenu from '../../assets/icon-close.svg';

export function Header() {

  const [ menuActive, setMenuState ] = useState(false);

  return (
    <Heading>
      <Container>
        <img src={logo} alt="Logo" />

        <ButtonNav onClick={() => setMenuState(!menuActive)}>
          <img src={!menuActive ? iconMenu : iconCloseMenu} alt="Menu" loading="lazy" />
        </ButtonNav>

        <Navbar class={menuActive ? 'active' : ''} />

        <Button>Request Invite</Button>

      </Container>
    </Heading>
  )
}

export default Header