import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f7;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #000000;
  margin-bottom: 4rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: clamp(1.2rem, 3vw, 2rem);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const TeamInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
`;

const TeamMember = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Name = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Email = styled.a`
  color: #111111;
  text-decoration: none;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  padding: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: inline-block;
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
    padding: 1rem 0;
  }
`;

const SocialIcon = styled.a`
  color: #000000;
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding: 0.5rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #555555;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("contact_title")} | Kolt</title>
        <meta name="description" content={t("contact_description")} />
        <link rel="canonical" href="https://www.kolt.fi/contact" />
        <meta property="og:title" content={t("contact_title")} />
        <meta property="og:description" content={t("contact_description")} />
        <meta property="og:url" content="https://www.kolt.fi/contact" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <PageContainer>
        <Title>{t("contact_title")}</Title>
        <ContactInfo>
          <ContactItem>
            <Icon>
              <FaEnvelope />
            </Icon>
            <a href="mailto:info@kolt.fi" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@kolt.fi
            </a>
          </ContactItem>
          <ContactItem>
            <Icon>
              <FaPhone />
            </Icon>
            <a href="tel:+358405539850" style={{ color: 'inherit', textDecoration: 'none' }}>
              0405539850
            </a>
          </ContactItem>
        </ContactInfo>
        <TeamInfo>
          <TeamMember>
            <Name>Riku Lauttia</Name>
            <Email href="mailto:rikulauttia@kolt.fi">rikulauttia@kolt.fi</Email>
          </TeamMember>
          <TeamMember>
            <Name>Robi Johansson</Name>
            <Email href="mailto:robijohansson@kolt.fi">robijohansson@kolt.fi</Email>
          </TeamMember>
        </TeamInfo>
        <SocialLinks>
          <SocialIcon
            href="https://linkedin.com/company/koltcompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=61563602496571"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare />
          </SocialIcon>
          <SocialIcon
            href="https://x.com/koltapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/koltapp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIcon>
        </SocialLinks>
      </PageContainer>
    </>
  );
}

export default Contact;