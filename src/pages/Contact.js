import React from "react";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";

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
    padding: 1rem;
    min-height: 100dvh;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #000000;
  margin-bottom: 4rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 600px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.2rem, 3vw, 2rem);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
    padding: 1rem 0;
  }
`;

const SocialIcon = styled.a`
  color: #000000;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  padding: 0.5rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #555555;
    transform: translateY(-2px);
  }
`;

function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Kolt | Ota Yhteyttä</title>
        <meta name="description" content={t("contact_description")} />
        <link rel="canonical" href="https://www.kolt.fi/contact" />
        <meta property="og:title" content="Ota Yhteyttä" />
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
            <a
              href="mailto:info@kolt.fi"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              info@kolt.fi
            </a>
          </ContactItem>
        </ContactInfo>
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
