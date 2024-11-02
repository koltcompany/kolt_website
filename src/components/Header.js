import React, {
  useEffect,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';

import LanguageSelector from './LanguageSelector';

const HeaderWrapper = styled.header`
  background-color: #f9f9f7;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  z-index: 1001;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    background-color: #f9f9f7;
    padding: 5rem 2rem 2rem 2rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    box-shadow: ${({ $isOpen }) => ($isOpen ? '-2px 0 5px rgba(0, 0, 0, 0.1)' : 'none')};
    z-index: 1001;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;

  &:hover {
    color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.1rem;
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  color: #000000;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

function Header({ currentLocale, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigateTo = (path) => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo onClick={() => navigateTo('/')} to="/">KOLT</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? "✕" : "☰"}
        </MenuButton>
        <NavLinks $isOpen={isOpen}>
          <NavItem>
            <NavLink as="button" onClick={() => navigateTo('/')}>{t("nav_home")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="button" onClick={() => navigateTo('/services')}>{t("nav_services")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="button" onClick={() => navigateTo('/about')}>{t("nav_about")}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as="button" onClick={() => navigateTo('/contact')}>{t("nav_contact")}</NavLink>
          </NavItem>
          <NavItem>
            <LanguageSelector />
          </NavItem>
        </NavLinks>
        <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
