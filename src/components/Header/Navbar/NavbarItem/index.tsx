import { NavItem, Link } from "./styles";

interface Props {
  name: string;
  link: string;
}

export function NavbarItem(props: Props) {
  return (
    <NavItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link href={props.link}>{props.name}</Link>
    </NavItem>
  );
}

export default NavbarItem;
