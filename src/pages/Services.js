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
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #000000;
  margin-bottom: 2rem;
  margin-top: 6rem;
  font-weight: 200;
  text-align: center;
  line-height: 1.4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceColumn = styled.div`
  background-color: #f9f9f7;
  padding: 2rem;
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 1.1rem;
  color: #333333;
  margin-bottom: 0.75rem;
`;

function Services() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("service_title")} | Kolt</title>
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
