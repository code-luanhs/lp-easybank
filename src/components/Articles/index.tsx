import { Container, Title, Swapper, TitleDiv } from "./styles";

import ContextArticles from "./ContextArticles";
import currency from "../../assets/image-currency.jpg"
import restaurant from "../../assets/image-restaurant.jpg"
import confetti from "../../assets/image-confetti.jpg"
import plane from "../../assets/image-plane.jpg"

function Articles() {
  return (
    <Container>
      <TitleDiv>
        <Title>Lastest Article</Title>
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
      </Swapper>
    </Container>
  );
}

export default Articles;
