import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

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

  const {t} = useTranslation();

  return (
    <PageContainer>
      <Title>
        {t("service_title")}
      </Title>
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
  );
}

export default Services;
