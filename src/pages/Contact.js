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
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: #000000;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 2rem;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const TeamInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamMember = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const Email = styled.a`
  color: #111111;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #000000;
  font-size: 1.5rem;
  &:hover {
    color: #555555;
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
            info@kolt.fi
          </ContactItem>
          <ContactItem>
            <Icon>
              <FaPhone />
            </Icon>
            0405539850
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
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=61563602496571"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </SocialIcon>
          <SocialIcon
            href="https://x.com/koltapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/koltapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialIcon>
        </SocialLinks>
      </PageContainer>
    </>
  );
}

export default Contact;
