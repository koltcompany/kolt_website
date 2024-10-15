import React from 'react';

import { Helmet } from 'react-helmet';
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
`;

const Content = styled.div`
  max-width: 1000px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 600;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #000000;
  color: white;

  &:hover {
    background-color: #333333;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    background-color: #f0f0f0;
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
        <title>{t("home_title")} | Kolt</title>
        <meta name="description" content={t("home_subtitle")} />
        <link rel="canonical" href="https://www.kolt.fi/" />
        <meta property="og:title" content={t("home_title")} />
        <meta property="og:description" content={t("home_subtitle")} />
        <meta property="og:url" content="https://www.kolt.fi/" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <HomeWrapper>
        <Content>
          <Title>{t("home_title")}</Title>
          <Subtitle>
            {t("home_subtitle")}
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton onClick={() => navigateTo('/services')} to="/services">{t("home_button_explore_services")}</PrimaryButton>
            <SecondaryButton onClick={() => navigateTo('/contact')} to="/contact">{t("home_button_contact_us")}</SecondaryButton>
          </ButtonGroup>
        </Content>
      </HomeWrapper>
    </>
  );
}

export default Home;