import { Section, Container, Title, Content, ListBenefits } from "./styles";

import { BenefitsItem } from "./BenefitsItem";

import iconOnline from "../../../assets/icon-online.svg";
import iconBudgeting from "../../../assets/icon-budgeting.svg";
import iconOnboarding from "../../../assets/icon-onboarding.svg";
import iconApi from "../../../assets/icon-api.svg";
import { useEffect, useState } from "react";

export function Benefits() {

  const cardVariants = {
    offscreen: {
      y: 200,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Section>
      <Container
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <header>
          <Title variants={cardVariants}>Why choose Easybank?</Title>
          <Content variants={cardVariants}>
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br />
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
  );
}

export default Benefits;
