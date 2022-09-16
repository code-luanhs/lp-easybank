import {
  Container
} from './styles';

import { Navbar } from './Navbar';
import { Button } from '../Button';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <Container>
        <img src={logo} alt="Logo" />

        <Navbar />

        <Button text="Request Invite" link="#" />
      </Container>
    </header>
  )
}

export default Header