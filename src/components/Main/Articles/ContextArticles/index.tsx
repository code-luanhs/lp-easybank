import {
  Container,
  ImageArticle,
  Swapper,
  By,
  Title,
  Context,
  DivImg
} from "./styles";

interface ArticleProps {
  url: string;
  by: string;
  title: string;
  content: string;
}

function ContextArticles({ url, by, title, content }: ArticleProps) {
  return (
    <Container>
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
