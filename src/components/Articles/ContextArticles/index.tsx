import {Container,ImageArticle,Swapper,By,Title,Context} from './styles'

interface ArticleProps{
    imageurl: string;
    by: string;
    title: string;
    context: string;

}

function ContextArticles({imageurl, by, title, context}:ArticleProps) {
    return ( 
        <Container>
            <ImageArticle src={imageurl} alt="img"/>
            <Swapper>
                <By>{by}</By>
                <Title>{title}</Title>
                <Context>{context}</Context>
            </Swapper>
        </Container>
     );
}

export default ContextArticles;