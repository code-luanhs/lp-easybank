import { NavItem, Link } from "./styles";

interface Props {
  name: string;
  link: string;
}

export function NavbarItem(props: Props) {
  return (
    <NavItem
    initial={{ y:-30, opacity: 0}}
    animate={{ y:0,opacity:1}}
    transition={{ duration: 1,delay:0.2 }}
    >
      <Link href={props.link}>{props.name}</Link>
    </NavItem>
  );
}

export default NavbarItem;
