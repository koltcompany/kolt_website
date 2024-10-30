import React, {
  useEffect,
  useState,
} from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    padding: 60px 1rem;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
  transition: all 0.6s ease;

  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: auto;
  }

  &:first-of-type {
    padding-top: 2rem;
  }
`;

const Content = styled.div`
  max-width: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
  transition: transform 0.3s ease;

  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.01);
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
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


function About() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  
  // Define background colors for each section
  const sectionColors = [
    '#f9f9f7', // Light background for first section
    '#ffffff', // White for second section
    '#f5f5f5', // Slight gray for third section
    '#f9f9f7'  // Back to light background for last section
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section'));
          setActiveSection(sectionIndex);
          entry.target.classList.add('visible');
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

    // Observe sections for background changes
    document.querySelectorAll('.section').forEach((section, index) => {
      section.setAttribute('data-section', index);
      sectionObserver.observe(section);
    });

    // Observe elements for animations
    document.querySelectorAll('.animate-section').forEach((el) => {
      animationObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      animationObserver.disconnect();
    };
  }, []);


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
      </PageContainer>
    </>
  );
}

export default About;