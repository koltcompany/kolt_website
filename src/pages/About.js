import React, {
  useEffect,
  useState,
} from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const FadeInSection = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SlideInSection = styled.div`
  opacity: 0;
  transform: ${props => props.$direction === 'left' ? 'translateX(-50px)' : 'translateX(50px)'};
  transition: all 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 2rem;
  margin: 0 auto;
  transition: background-color 0.6s ease;
  background-color: ${props => props.$bgColor};

  @media (max-width: 768px) {
    padding: 0;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
  transition: all 0.6s ease;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 2rem 1rem;
    scroll-snap-align: start;
  }
`;

const Content = styled.div`
  max-width: 800px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 80px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #333333;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const BackgroundSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-color 0.6s ease;
  background-color: ${props => props.$bgColor};
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

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #000000;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  display: ${({ $isLastSectionVisible }) => ($isLastSectionVisible ? 'none' : 'block')};

  @media (max-width: 768px) {
    display: ${({ $isLastSectionVisible }) => ($isLastSectionVisible ? 'none' : 'block')};
  }
`;

function About() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);

  const sectionColors = [
    '#f9f9f7', // Light background for first section
    '#ffffff', // White for second section
    '#f5f5f5', // Slight gray for third section
    '#f9f9f7'  // Back to light background for last section
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section'));
          setActiveSection(sectionIndex);
          entry.target.classList.add('visible');
          setIsLastSectionVisible(sectionIndex === sectionColors.length - 1);
        }
      });
    }, observerOptions);

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach((section, index) => {
      section.setAttribute('data-section', index);
      sectionObserver.observe(section);
    });

    document.querySelectorAll('.animate-section').forEach((el) => {
      animationObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      animationObserver.disconnect();
    };
  }, [sectionColors.length]);

  return (
    <>
      <Helmet>
        <title>Kolt | {t("about_title")}</title>
        <meta name="description" content={t("about_kolt")} />
        <link rel="canonical" href="https://www.kolt.fi/about" />
        <meta property="og:title" content={t("about_title")} />
        <meta property="og:description" content={t("about_kolt")} />
        <meta property="og:url" content="https://www.kolt.fi/about" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <BackgroundSection $bgColor={sectionColors[activeSection]} />
      <PageContainer>
        <HeroSection className="section">
          <FadeInSection className="animate-section">
            <Content>
              <Title>{t("about_title")}</Title>
              <Subtitle>{t("about_kolt")}</Subtitle>
            </Content>
          </FadeInSection>
        </HeroSection>
        
        <HeroSection className="section">
          <SlideInSection className="animate-section" $direction="left">
            <Content>
              <Title>{t("our_vision_title")}</Title>
              <Subtitle>{t("our_vision_subtitle")}</Subtitle>
            </Content>
          </SlideInSection>
        </HeroSection>

        <HeroSection className="section">
          <SlideInSection className="animate-section" $direction="right">
            <Content>
              <Title>{t("why_kolt_title")}</Title>
              <Subtitle>{t("why_kolt_subtitle")}</Subtitle>
            </Content>
          </SlideInSection>
        </HeroSection>

        <HeroSection className="section">
          <FadeInSection className="animate-section">
            <Content>
              <Title>{t("join_us_title")}</Title>
              <Subtitle>{t("join_us_subtitle1")}</Subtitle>
              <Subtitle>{t("join_us_subtitle2")}</Subtitle>
            </Content>
          </FadeInSection>
        </HeroSection>
        <ScrollIndicator $isLastSectionVisible={isLastSectionVisible}>↓</ScrollIndicator>
      </PageContainer>
    </>
  );
}

export default About;