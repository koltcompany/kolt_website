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
  padding: 110px 1.5rem 72px;
  margin: 0 auto;
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
  max-width: 960px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4.2vw, 3rem);
  color: #000000;
  margin: 0 auto 1rem;
  font-weight: 800;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  color: #333333;
  margin: 0 auto;
  line-height: 1.7;
  max-width: 820px;
`;

const Founder = styled.p`
  font-size: 0.95rem;
  color: #666666;
  margin: 0.75rem auto 0;
`;

const SectionHeader = styled.h2`
  font-size: clamp(1.25rem, 2.4vw, 1.6rem);
  color: #000000;
  margin: 2.5rem auto 1rem;
  font-weight: 700;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  margin: 1.25rem auto 1.75rem;
  text-align: left;
  animation: ${fadeUp} 700ms ease both;
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
  margin-bottom: 0.6rem;
  color: #333333;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.58em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000000;
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