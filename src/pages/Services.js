import React, {
  useEffect,
  useState,
} from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 1rem;
    min-height: auto;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: #000000;
  margin-bottom: 2rem;
  font-weight: 200;
  text-align: center;
  line-height: 1.4;
  max-width: 800px;
  margin: 6rem auto 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    margin: 4rem auto 6rem;
    min-height: 60vh;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #000000;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    bottom: 20vh;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    opacity: ${props => props.$visible ? '1' : '0'};
    transform: translateY(${props => props.$visible ? '0' : '20px'});
  }
`;

const ServiceColumn = styled.div`
  background-color: #f9f9f7;
  padding: 2rem;
  border-radius: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}s;

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
`;

const ServiceTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
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
    margin-bottom: 1rem;
    line-height: 1.5;
    padding-left: 0;
    
    &:before {
      display: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function Services() {
  const { t, i18n } = useTranslation();
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.3) {
        setShowServices(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
        <ScrollIndicator onClick={scrollToServices}>
          <FaChevronDown size={24} />
        </ScrollIndicator>
        <ServiceGrid $visible={showServices}>
          <ServiceColumn $delay={0.2}>
            <ServiceTitle>{t("service_for_installers")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("service_installers_list1")}</ServiceItem>
              <ServiceItem>{t("service_installers_list2")}</ServiceItem>
              <ServiceItem>{t("service_installers_list3")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn $delay={0.4}>
            <ServiceTitle>{t("service_for_businesses")}</ServiceTitle>
            <ServiceList>
              <ServiceItem>{t("service_businesses_list1")}</ServiceItem>
              <ServiceItem>{t("service_businesses_list2")}</ServiceItem>
              <ServiceItem>{t("service_businesses_list3")}</ServiceItem>
            </ServiceList>
          </ServiceColumn>
          <ServiceColumn $delay={0.6}>
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