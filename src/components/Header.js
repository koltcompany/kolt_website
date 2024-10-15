import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
import {useTranslation} from "react-i18next";

const HeaderWrapper = styled.header`
  background-color: #f9f9f7;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header({ currentLocale, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (path) => {
    window.scrollTo(0, 0);
  }

  const {t} = useTranslation();

  return (
    <HeaderWrapper>
      <Nav>
        <Logo onClick={() => navigateTo('/')} to="/">KOLT</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink onClick={() => navigateTo('/')} to="/">{t("nav_home")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigateTo('/services')} to="/services">{t("nav_services")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigateTo('/about')} to="/about">{t("nav_about")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => navigateTo('/contact')} to="/contact">{t("nav_contact")}</NavLink>
          </NavItem>
          <NavItem>
            <LanguageSelector />
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
