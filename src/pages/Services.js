import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: #000000;
  margin-bottom: 2rem;
  margin-top: 6rem;
  font-weight: 200;
  text-align: center;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

const ServiceColumn = styled.div`
  background-color: #f9f9f7;
  padding: 2rem;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #333333;
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #000000;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function Services() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Kolt | {t("service_title")}</title>
        <meta name="description" content={t("service_description")} />
        <link rel="canonical" href="https://www.kolt.fi/services" />
        <meta property="og:title" content={t("service_title")} />
        <meta property="og:description" content={t("service_description")} />
        <meta property="og:url" content="https://www.kolt.fi/services" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <PageContainer>
        <Title>{t("service_title")}</Title>
        <ServiceGrid>
          <ServiceColumn>
            <ServiceTitle>{t("service_for_installers")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("service_installers_list1")}</ServiceItem>
              <ServiceItem>{t("service_installers_list2")}</ServiceItem>
              <ServiceItem>{t("service_installers_list3")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn>
            <ServiceTitle>{t("service_for_businesses")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("service_businesses_list1")}</ServiceItem>
              <ServiceItem>{t("service_businesses_list2")}</ServiceItem>
              <ServiceItem>{t("service_businesses_list3")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn>
            <ServiceTitle>{t("service_for_drivers")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("service_drivers_list1")}</ServiceItem>
              <ServiceItem>{t("service_drivers_list2")}</ServiceItem>
              <ServiceItem>{t("service_drivers_list3")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
        </ServiceGrid>
      </PageContainer>
    </>
  );
}

export default Services;