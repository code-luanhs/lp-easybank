import Button from "../../Button";
import { Section, Container, Content, Text, Title, Image } from "./styles";

import mockups from "../../../assets/image-mockups.png";

export function Intro() {
  return (
    <Section>
      <Container>
        <Content
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Title>Next generation digital banking</Title>
          <Text>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Text>

          <Button text="Request Invite" link="#" />
        </Content>
      </Container>

      <Image
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.7 }}
        src={mockups}
        alt="Mockups"
      />
    </Section>
  );
}

export default Intro;
