import { Container, ImageArticle, Swapper, By, Title, Context } from "./styles";

interface ArticleProps {
  url: string;
  by: string;
  title: string;
  content: string;
}

function ContextArticles({ url, by, title, content }: ArticleProps) {
  return (
    <Container>
      <ImageArticle src={url} alt="img" />
      <Swapper>
        <By>{by}</By>
        <Title href="#">{title}</Title>
        <Context>{content}</Context>
      </Swapper>
    </Container>
  );
}

export default ContextArticles;
