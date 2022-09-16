import {
  Container
} from './styles';

import { Navbar } from '../Navbar';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <Container>
        <img src={logo} alt="Logo" />

        <Navbar />
      </Container>
    </header>
  )
}

export default Header