import {
  Section,
  Container,
  Title,
  Swapper,
  TitleDiv,
  DivTop,
  BtnTop,
  IconTop,
} from "./styles";

import ContextArticles from "./ContextArticles";

import currency from "../../../assets/image-currency.jpg";
import restaurant from "../../../assets/image-restaurant.jpg";
import confetti from "../../../assets/image-confetti.jpg";
import plane from "../../../assets/image-plane.jpg";

import ScrollButton from "../../ScrollY";

export function Articles() {
  const cardVariants3 = {
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
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Section
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}>
      <Container
      variants={cardVariants3}>
        <TitleDiv
        >
          <Title >Latest Articles</Title>
        </TitleDiv>
        <Swapper>
          <ContextArticles
            url={currency}
            title="Reiceve money in any currency with no fees"
            content="The word is getting smaller and were becoming more mobile. So why should you be forced to only receive money in a single..."
            by="By Clara Bumbsman"
          />
          <ContextArticles
            url={restaurant}
            title="Treat yourself without worrying about money  "
            content="Dur simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            by="By William Hutsman"
          />
          <ContextArticles
            url={plane}
            title="Take your Easybank card wherever you go  "
            content="We want you to enjoy your travels. This is why we dont charge any feels on purchases while you are abroad. Well even show you..."
            by="By William Hutsman"
          />
          <ContextArticles
            url={confetti}
            title="You invite-only Beta accounts are now live! "
            content="After a lot of hard work by the whole team, were excited to launch our closed beta. Its easy to request an invite throwgth the site..."
            by="By Clara Bumbsman"
          />
          <ScrollButton />
        </Swapper>
      </Container>
    </Section>
  );
}

export default Articles;
