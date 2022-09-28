import {Container, Title, Swapper} from './styles'

import ContextArticles from "./ContextArticles";

function Articles() {
    return ( 
       <Container>
        <Title>Lastest Article</Title>
        <Swapper>
            <ContextArticles
            imageurl='image1'
            title='Reiceve money in any currency with no fees'
            context='The word is getting smaller and were beccoming more mobile. So why should you be forced to only receive money in a single...'
            by='By Clara Bumbsman'
            
            />
            <ContextArticles
            imageurl='image1'
            title='Treat yourself without worrying about money  '
            context='Dur simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
            by='By William Hutsman'    
            />
            <ContextArticles
            imageurl='image1'
            title='Take your Easybank card wherever you go  '
            context='We want you to enjoy your travels. This is why we dont charge any feels on purchases while you are abroad. Well even show you...'
            by='By William Hutsman'    
            />
            <ContextArticles
            imageurl='image1'
            title='You invite-only Beta accounts are now live! '
            context='After a lot of hard work by the whole team, were excited to launch our closed beta. Its easy to request an invite throwgth the site...'
            by='By William Hutsman'    
            />
        </Swapper>
       </Container> 
     );
}

export default Articles;