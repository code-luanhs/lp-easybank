import {
  Heading,
  Container,

  ButtonNav
} from './styles';


import { Navbar } from './Navbar';

import logo from '../../assets/logo.svg';
import iconMenu from '../../assets/icon-hamburger.svg';
import Button from '../Button';

export function Header() {
  return (
    <Heading>
      <Container>
        <img src={logo} alt="Logo" />

        <ButtonNav>
          <img src={iconMenu} alt="Menu" loading="lazy" />
        </ButtonNav>

        <Navbar />

        <Button
        link='http://localhost:3000/'
        text='Request Invite'
        />

      </Container>
    </Heading>
  )
}

export default Header