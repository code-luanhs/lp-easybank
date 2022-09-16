import Button from '../../Button';
import {
  Section,
  Container,
  Content,
  Text,
  Title,
  Image
} from './styles';

import mockups from '../../../assets/image-mockups.png';

export function Intro() {
  return (
    <Section>
      <Container>
        <Content>
          <Title>Next generation digital banking</Title>
          <Text>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
            saving, budgeting, investing, and much more.</Text>

          <Button text="Request Invite" link="#" />
        </Content>
      </Container>

      <Image src={mockups} alt="Mockups" />
    </Section>
  )
}

export default Intro