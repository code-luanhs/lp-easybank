import {
  Heading,
  Container
} from './styles';

import { Navbar } from './Navbar';
import { Button } from '../Button';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Heading>
      <Container>
        <img src={logo} alt="Logo" />

        <Navbar />

        <Button text="Request Invite" link="#" />
      </Container>
    </Heading>
  )
}

export default Header