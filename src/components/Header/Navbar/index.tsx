import { motion } from "framer-motion";
import { NavbarItem } from "./NavbarItem";
import { Nav } from "./styles";

interface Props {
  class: string;
}

export function Navbar(props: Props) {
  return (
    <Nav className={props.class}>
      <NavbarItem name="Home" link="#" />
      <NavbarItem name="About" link="#" />
      <NavbarItem name="Contact" link="#" />
      <NavbarItem name="Blog" link="#" />
      <NavbarItem name="Careers" link="#" />
    </Nav>
  );
}

export default Navbar;
