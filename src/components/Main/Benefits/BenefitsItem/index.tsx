import {
  Title,
  Content
} from './styles';

interface Props {
  bannerUrl: string;
  title: string;
  description: string;
}

export function BenefitsItem(props: Props) {
  return (
    <li>
      <img src={props.bannerUrl} alt={props.title} loading="lazy" />
      <Title>{props.title}</Title>
      <Content>{props.description}</Content>
    </li>
  )
}

export default BenefitsItem