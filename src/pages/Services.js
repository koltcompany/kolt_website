import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 80px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    padding: 100px 2rem 60px;
  }

  @media (max-width: 768px) {
    padding: 100px 1.5rem 60px;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 90px 1rem 50px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #1d1d1f;
  margin: 0 auto 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.05;
  letter-spacing: -0.015em;
  max-width: 900px;
  width: 100%;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 1rem;
    font-size: 2.25rem;
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.375rem);
  color: #6e6e73;
  margin: 0 auto 3rem;
  line-height: 1.47059;
  max-width: 750px;
  width: 100%;
  text-align: center;
  font-weight: 400;
  padding: 0 1rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.1s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    font-size: 1.0625rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 auto 1.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.2s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ServiceColumn = styled.div`
  background: #fbfbfd;
  padding: 2.5rem;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 260px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1024px) {
    padding: 2.25rem;
    min-height: 240px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.75rem;
    text-align: center;
    min-height: unset;
  }

  @media (max-width: 480px) {
    padding: 1.75rem 1.5rem;
    border-radius: 16px;
  }
`;

const ServiceTitle = styled.h2`
  font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  color: #1d1d1f;
  margin-bottom: 1.25rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.01em;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.375rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.875rem;
  }
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ServiceItem = styled.li`
  font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
  color: #6e6e73;
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.25rem;
  line-height: 1.52947;
  font-weight: 400;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1d1d1f;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    padding-left: 0;
    font-size: 1rem;
    text-align: center;
    
    &:before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
  max-width: 600px;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.3s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  @media (max-width: 1024px) {
    margin-top: 2.75rem;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const CTAButton = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 0.75rem 1.75rem;
  border-radius: 980px;
  font-weight: 400;
  font-size: 1.0625rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 160px;
  text-align: center;

  &:hover {
    background-color: #333333;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 1rem;
    font-size: 1.0625rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1rem;
    font-size: 1rem;
  }
`;

function Services() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://www.kolt.fi/services" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://www.kolt.fi/services" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <PageContainer>
        <Title>{t("services.title")}</Title>
        <Subtitle>{t("services.subtitle")}</Subtitle>
        <ServiceGrid>
          <ServiceColumn>
            <ServiceTitle>{t("services.cards.advisory.title")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("services.cards.advisory.desc")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn>
            <ServiceTitle>{t("services.cards.solutions.title")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("services.cards.solutions.desc")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn>
            <ServiceTitle>{t("services.cards.products.title")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("services.cards.products.desc")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn>
            <ServiceTitle>{t("services.cards.operations.title")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("services.cards.operations.desc")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
        </ServiceGrid>
        <CTAWrapper>
          <CTAButton href="/contact">{t("services.cta")}</CTAButton>
        </CTAWrapper>
      </PageContainer>
    </>
  );
}

export default Services;