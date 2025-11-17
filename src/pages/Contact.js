import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
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
  padding: 120px 2rem 48px; /* ensure title clears fixed header on all sizes */
  background-color: #f9f9f7;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 96px 1rem 2rem; /* space for fixed header */
    min-height: 100dvh;
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
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`;

const Lead = styled.p`
  max-width: 700px;
  text-align: center;
  margin-bottom: 2rem;
  color: #333333;
  padding: 0 0.25rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
  }
`;

const Textarea = styled.textarea`
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #ffffff;
  font-size: 1rem;
  outline: none;
  min-height: 140px;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
  }
`;

const Submit = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.95rem 1.2rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  width: 100%;

  &:hover {
    background-color: #222222;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setHasError(false);
    setIsSent(false);

    fetch("https://formsubmit.co/ajax/a58060c4155429f731029b898ed22cc7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Website contact: ${name || "-"}`,
        _template: "table",
        _replyto: email || "",
        _captcha: "false"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setIsSent(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://www.kolt.fi/contact" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content="https://www.kolt.fi/contact" />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>
      <PageContainer>
        <Title>{t("contact.title")}</Title>
        <Lead>{t("contact.subtitle")}</Lead>
        <Form onSubmit={onSubmit}>
          <Field>
            <span style={{ marginBottom: '0.4rem' }}>{t("contact.form.name")}</span>
            <Input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label={t("contact.form.name")}
              autoComplete="name"
              required
            />
          </Field>
          <Field>
            <span style={{ marginBottom: '0.4rem' }}>{t("contact.form.email")}</span>
            <Input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={t("contact.form.email")}
              autoComplete="email"
              required
            />
          </Field>
          <Field>
            <span style={{ marginBottom: '0.4rem' }}>{t("contact.form.message")}</span>
            <Textarea
              name="message"
              placeholder={t("contact.form.message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label={t("contact.form.message")}
              rows={6}
              required
            />
          </Field>
          <Submit type="submit" disabled={isSending}>
            {isSending ? "Sending..." : t("contact.form.submit")}
          </Submit>
        </Form>
        <div aria-live="polite" style={{ minHeight: '1.25rem', color: hasError ? '#b00020' : '#2e7d32', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
          {isSent && !hasError ? "Thanks — your message was sent." : null}
          {hasError ? "Sorry, something went wrong. Please email info@kolt.fi directly." : null}
        </div>
        <div style={{ fontSize: '0.95rem', color: '#666666' }}>
          {t("contact.alt")} <a href="mailto:info@kolt.fi" style={{ color: 'inherit' }}>info@kolt.fi</a>
        </div>
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
