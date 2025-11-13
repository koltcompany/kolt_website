import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 2rem 64px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    padding: 96px 1.5rem 56px;
  }

  @media (max-width: 768px) {
    padding: 96px 1rem 48px;
    min-height: auto;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4.2vw, 3rem);
  color: #000000;
  margin: 2rem auto 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  max-width: 900px;

  @media (max-width: 768px) {
    margin: 1.5rem auto 0.5rem;
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  color: #333333;
  margin: 0.75rem auto 0;
  line-height: 1.7;
  max-width: 900px;
  text-align: center;
  opacity: 0.9;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2.25rem auto 0;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.75rem;
  }
`;

const ServiceColumn = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 240px;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    text-align: center;
    min-height: unset;
  }
`;

const ServiceTitle = styled.h2`
  font-size: clamp(1.25rem, 2.4vw, 1.6rem);
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    text-align: center;
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
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  color: #333333;
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.25rem;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.58em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000000;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
    padding-left: 0;
    
    &:before {
      display: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTAButton = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 0.2px;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #222222;
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem 1.25rem;
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