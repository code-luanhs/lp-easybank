import { Link } from './styles';

interface Props {
  text: string;
  link: string;
}

export function Button(props: Props) {
  return (
    <Link href={props.link}>
      {props.text}
    </Link>
  )
}

export default Button