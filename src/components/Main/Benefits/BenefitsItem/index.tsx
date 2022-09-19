interface Props {
  bannerUrl: string;
  title: string;
  description: string;
}

export function BenefitsItem(props: Props) {
  return (
    <li>
      <img src={props.bannerUrl} alt={props.title} loading="lazy" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default BenefitsItem