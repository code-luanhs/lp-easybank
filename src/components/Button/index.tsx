import { Link } from "./styles";

interface Props {
  text: string;
  link: string;
}

export function Button(props: Props) {
  return (
    <Link
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1}}
      href={props.link}
    >
      {props.text}
    </Link>
  );
}

export default Button;
