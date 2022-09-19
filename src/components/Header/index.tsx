import {
  Heading,
  Container,
  Button,
  ButtonNav
} from './styles';

import { Navbar } from './Navbar';

import logo from '../../assets/logo.svg';
import iconMenu from '../../assets/icon-hamburger.svg';

export function Header() {
  return (
    <Heading>
      <Container>
        <img src={logo} alt="Logo" />

        <ButtonNav>
          <img src={iconMenu} alt="Menu" loading="lazy" />
        </ButtonNav>

        <Navbar />

        <Button href="">Request Invite</Button>
      </Container>
    </Heading>
  )
}

export default Header