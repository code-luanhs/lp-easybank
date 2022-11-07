import { motion } from "framer-motion";
import { Title, Content } from "./styles";

interface Props {
  bannerUrl: string;
  title: string;
  description: string;
}

export function BenefitsItem(props: Props) {
  const cardVariants2 = {
    offscreen: {
      y: 200,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.li variants={cardVariants2}>
      <img src={props.bannerUrl} alt={props.title} loading="lazy" />
      <Title>{props.title}</Title>
      <Content>{props.description}</Content>
    </motion.li>
  );
}

export default BenefitsItem;
