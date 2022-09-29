import { Container, Title, Swapper, TitleDiv } from "./styles";

import ContextArticles from "./ContextArticles";

function Articles() {
  return (
    <Container>
      <TitleDiv>
        <Title>Lastest Article</Title>
      </TitleDiv>
      <Swapper>
        <ContextArticles
          url="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          title="Reiceve money in any currency with no fees"
          content="The word is getting smaller and were becoming more mobile. So why should you be forced to only receive money in a single..."
          by="By Clara Bumbsman"
        />
        <ContextArticles
          url="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          title="Treat yourself without worrying about money  "
          content="Dur simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
          by="By William Hutsman"
        />
        <ContextArticles
          url="https://apod.nasa.gov/apod/image/1409/auroramilkyway_strand_910.jpg"
          title="Take your Easybank card wherever you go  "
          content="We want you to enjoy your travels. This is why we dont charge any feels on purchases while you are abroad. Well even show you..."
          by="By William Hutsman"
        />
        <ContextArticles
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          title="You invite-only Beta accounts are now live! "
          content="After a lot of hard work by the whole team, were excited to launch our closed beta. Its easy to request an invite throwgth the site..."
          by="By Clara Bumbsman"
        />
      </Swapper>
    </Container>
  );
}

export default Articles;
