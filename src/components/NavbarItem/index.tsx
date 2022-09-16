import { NavItem } from './styles';

interface Props {
  name: string;
  link: string;
}

export function NavbarItem(props: Props) {
  return (
    <NavItem>
      <a href={props.link}>
        {props.name}
      </a>
    </NavItem>
  )
}

export default NavbarItem