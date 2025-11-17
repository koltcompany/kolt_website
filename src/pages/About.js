import React, {
  useEffect,
} from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 80px;
  margin: 0 auto;
  max-width: 1100px;

  @media (max-width: 1024px) {
    padding: 100px 2rem 60px;
  }

  @media (max-width: 768px) {
    padding: 100px 1.5rem 60px;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    padding: 90px 1rem 50px;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Reveal = styled.div`
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease, transform 600ms ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #1d1d1f;
  margin: 0 auto 2rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.0625rem);
  color: #6e6e73;
  margin: 0 auto;
  line-height: 1.52947;
  max-width: 820px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

const Founder = styled.p`
  font-size: 0.9375rem;
  color: #86868b;
  margin: 1rem auto 0;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const SectionHeader = styled.h2`
  font-size: clamp(1.375rem, 2.4vw, 1.75rem);
  color: #1d1d1f;
  margin: 3rem auto 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 2.5rem auto 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.375rem;
    margin: 2rem auto 1rem;
  }
`;

const Card = styled.div`
  background: #fbfbfd;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  padding: 2.5rem;
  margin: 0 auto 2rem;
  text-align: left;
  animation: ${fadeUp} 700ms ease both;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.75rem 1.5rem;
    border-radius: 16px;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 820px;
  text-align: left;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
  color: #6e6e73;
  line-height: 1.52947;
  font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
  font-weight: 400;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1d1d1f;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

function About() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://www.kolt.fi/about" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://www.kolt.fi/about" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <PageContainer>
        <Content>
          <Reveal className="reveal" style={{ transitionDelay: '60ms' }}>
            <Title>{t("about.title")}</Title>
          </Reveal>
          <Reveal className="reveal" style={{ transitionDelay: '140ms' }}>
            <Card>
              <Subtitle>{t("about.body")}</Subtitle>
              <Founder>{t("about.founder")}</Founder>
            </Card>
          </Reveal>

          <Reveal className="reveal" style={{ transitionDelay: '220ms' }}>
            <SectionHeader>{t("about.bulletsTitle")}</SectionHeader>
          </Reveal>
          <Reveal className="reveal" style={{ transitionDelay: '260ms' }}>
            <Card>
              <BulletList>
                {t("about.bullets", { returnObjects: true }).map((item, idx) => (
                  <BulletItem key={idx} className="reveal" style={{ transitionDelay: `${280 + idx * 70}ms` }}>
                    {item}
                  </BulletItem>
                ))}
              </BulletList>
            </Card>
          </Reveal>

          <Reveal className="reveal" style={{ transitionDelay: '320ms' }}>
            <SectionHeader>{t("about.moreTitle")}</SectionHeader>
          </Reveal>
          <Reveal className="reveal" style={{ transitionDelay: '360ms' }}>
            <Card>
              <Subtitle style={{ margin: 0 }}>{t("about.more")}</Subtitle>
            </Card>
          </Reveal>
        </Content>
      </PageContainer>
    </>
  );
}

export default About;