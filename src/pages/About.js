import React, {useEffect, useState, useTransition} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 2rem;
  background-color: #f9f9f7;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 160px);
`;

const Content = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: #000000;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #000000;
  color: white;

  &:hover {
    background-color: #333333;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Section = styled.div`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

function About() {
  const {t} = useTranslation();

  return (
    <PageContainer>
      <HeroSection>
        <Content>
          <Title>{t("about_title")}</Title>
          <Subtitle>
            {t("about_kolt")}
          </Subtitle>
        </Content>
      </HeroSection>

        <HeroSection>
          <Content>
            <Title>{t("our_vision_title")}</Title>
            <Subtitle>
              {t("our_vision_subtitle")}
            </Subtitle>
          </Content>
        </HeroSection>

        <HeroSection>
          <Content>
            <Title>{t("why_kolt_title")}</Title>
            <Subtitle>
              {t("why_kolt_subtitle")}
            </Subtitle>
          </Content>
        </HeroSection>

        <HeroSection>
          <Content>
            <Title>{t("join_us_title")}</Title>
            <Subtitle>
              {t("join_us_subtitle1")}
            </Subtitle>
            <Subtitle>
              {t("join_us_subtitle2")}
            </Subtitle>
          </Content>
        </HeroSection>
      </PageContainer>
  );
}

export default About;
