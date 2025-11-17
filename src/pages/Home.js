import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 80px;
    padding-bottom: 1rem;
    min-height: 100vh;
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.5rem;
    text-align: left;
  }
`;

const Kicker = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #86868b;
  margin-bottom: 1rem;
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
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  color: #1d1d1f;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.015em;
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
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.0625rem, 2vw, 1.375rem);
  color: #6e6e73;
  margin-bottom: 2.5rem;
  line-height: 1.47059;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
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

  @media (max-width: 768px) {
    font-size: 1.0625rem;
    margin-bottom: 1.5rem;
    line-height: 1.52947;
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  text-decoration: none;
  border-radius: 980px;
  font-weight: 400;
  font-size: 1.0625rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  min-width: 140px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 1rem;
    font-size: 1.0625rem;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #000000;
  color: #ffffff;

  &:hover {
    background-color: #333333;
    transform: scale(1.02);
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
    transform: scale(1.02);
  }

  @media (hover: none) {
    &:hover {
      background-color: white;
    }
  }
`;

const TechSection = styled.section`
  width: 100%;
  padding: 2rem 0 2rem;
  overflow: hidden;
  background: transparent;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 1.5rem 0 0.5rem;
    margin-top: auto;
  }
`;

const TechTitle = styled.div`
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #86868b;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 0.6875rem;
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogoTrack = styled.div`
  display: flex;
  gap: 4rem;
  animation: ${scroll} 40s linear infinite;
  will-change: transform;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  opacity: 0.5;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(100%);

  &:hover {
    opacity: 0.8;
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    min-width: 140px;
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 45px;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 35px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

function Home() {
  const navigateTo = (path) => {
    window.scrollTo(0, 0);
  }

  const { t, i18n } = useTranslation();

  const techLogos = [
    { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
    { name: 'Anthropic', src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg' },
    { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Microsoft Azure', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
    { name: 'Google Cloud', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    { name: 'PyTorch', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/PyTorch_logo_black.svg' },
    { name: 'TensorFlow', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg' },
    { name: 'Hugging Face', src: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-with-title.svg' },
  ];

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
        <HeroSection>
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
        </HeroSection>
        <TechSection>
          <TechTitle>OUR TECH PARTNERS</TechTitle>
          <LogoContainer>
            <LogoTrack>
              {techLogos.map((logo, idx) => (
                <LogoWrapper key={`${logo.name}-${idx}`}>
                  <LogoImage src={logo.src} alt={logo.name} loading="lazy" />
                </LogoWrapper>
              ))}
              {techLogos.map((logo, idx) => (
                <LogoWrapper key={`${logo.name}-dup-${idx}`}>
                  <LogoImage src={logo.src} alt={logo.name} loading="lazy" />
                </LogoWrapper>
              ))}
            </LogoTrack>
          </LogoContainer>
        </TechSection>
      </HomeWrapper>
    </>
  );
}

export default Home;
