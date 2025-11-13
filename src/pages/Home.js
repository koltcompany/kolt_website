import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    justify-content: flex-start;
    padding-top: 100px;
  }
`;

const Content = styled.div`
  max-width: 1000px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Kicker = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #666666;
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 600;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    line-height: 1.1;
    margin-top: 3rem;
    text-align: left;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  @media (max-width: 480px) {
    font-size: 2.7rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #333333;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
    line-height: 1.7;
    text-align: left;
    color: #666666;
    max-width: 100%;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    letter-spacing: 0.2px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.1rem;
    letter-spacing: 0.3px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #000000;
  color: white;

  &:hover {
    background-color: #333333;
  }

  @media (hover: none) {
    &:hover {
      background-color: #000000;
    }
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (hover: none) {
    &:hover {
      background-color: white;
    }
  }
`;

function Home() {
  const navigateTo = (path) => {
    window.scrollTo(0, 0);
  }

  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://www.kolt.fi/" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://www.kolt.fi/" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <HomeWrapper>
        <Content>
          <Kicker>{t("hero.kicker")}</Kicker>
          <Title>{t("hero.title")}</Title>
          <Subtitle>
            {t("hero.subtitle")}
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton onClick={() => navigateTo('/contact')} to="/contact">
              {t("hero.ctaPrimary")}
            </PrimaryButton>
            <SecondaryButton onClick={() => navigateTo('/services')} to="/services">
              {t("hero.ctaSecondary")}
            </SecondaryButton>
          </ButtonGroup>
        </Content>
      </HomeWrapper>
    </>
  );
}

export default Home;
