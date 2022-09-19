import {
  Section,
  Container,
  Title,
  Content,
  ListBenefits
} from './styles';

import { BenefitsItem } from './BenefitsItem';

import iconOnline from '../../../assets/icon-online.svg';
import iconBudgeting from '../../../assets/icon-budgeting.svg';
import iconOnboarding from '../../../assets/icon-onboarding.svg';
import iconApi from '../../../assets/icon-api.svg';

export function Benefits() {
  return (
    <Section>
      <Container>
        <header>
          <Title>Why choose Easybank?</Title>
          <Content>
            We leverage Open Banking to turn your bank account into your financial hub.<br />
            Control your finances like never before.
          </Content>
        </header>

        <ListBenefits>
          <BenefitsItem
            bannerUrl={iconOnline}
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <BenefitsItem
            bannerUrl={iconBudgeting}
            title="Simple Budgeting"
            description="See exactky where your money goes each month. Receive notifications when you're close to hitting your limits."
          />
          <BenefitsItem
            bannerUrl={iconOnboarding}
            title="Fast Onboarding"
            description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <BenefitsItem
            bannerUrl={iconApi}
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking, your money has never been easier."
          />
        </ListBenefits>
      </Container>
    </Section>
  )
}

export default Benefits