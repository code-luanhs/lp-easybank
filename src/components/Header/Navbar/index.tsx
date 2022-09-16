import { NavbarItem } from './NavbarItem';
import { Nav } from './styles';

export function Navbar() {
  return (
    <Nav>
      <NavbarItem name="Home" link="#" />
      <NavbarItem name="About" link="#" />
      <NavbarItem name="Contact" link="#" />
      <NavbarItem name="Blog" link="#" />
      <NavbarItem name="Careers" link="#" />
    </Nav>
  )
}

export default Navbar