import {
  Container,
  ImageArticle,
  Swapper,
  By,
  Title,
  Context,
  DivImg,
} from "./styles";

interface ArticleProps {
  url: string;
  by: string;
  title: string;
  content: string;
}

function ContextArticles({ url, by, title, content }: ArticleProps) {

  const cardVariants2 = {
    offscreen: {
      y: 100,
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
        
      },
    },
  };

  return (
    <Container
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants2}
    >
      <DivImg>
        <ImageArticle src={url} alt="img" />
      </DivImg>
      <Swapper>
        <By>{by}</By>
        <Title href="#">{title}</Title>
        <Context>{content}</Context>
      </Swapper>
    </Container>
  );
}

export default ContextArticles;
