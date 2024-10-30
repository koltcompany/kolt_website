import React, {
  useEffect,
  useState,
} from 'react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`;

const LanguageButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 0.9em;
  font-weight: 500;
  background-color: ${props => 
    props.$isSelected ? '#000000' : 
    props.$isHovered ? '#000000' : '#8f8f8f'};
  cursor: pointer;
  transition: all 0.25s ease;
  color: #ffffff;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: #000000;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8em;
    font-size: 1em;
    margin: 0;
    text-align: center;
  }

  /* Active/Pressed state for mobile */
  &:active {
    transform: scale(0.98);
  }
`;

const languages = [
    { code: "fi", lang: "languages.finnish" },
    { code: "en", lang: "languages.english" },
    { code: "sv", lang: "languages.swedish" },
];

const LanguageSelector = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const { t, i18n } = useTranslation();

    // Set initial selected language
    useEffect(() => {
        setSelectedButton(i18n.language);
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedButton(lng);
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lng);
    };

    return (
        <ButtonContainer>
            {languages.map((lng) => (
                <LanguageButton 
                    $isSelected={lng.code === selectedButton}
                    $isHovered={lng.code === hoveredButton}
                    onMouseEnter={() => setHoveredButton(lng.code)}
                    onMouseLeave={() => setHoveredButton(null)}
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                    aria-label={`Change language to ${t(lng.lang)}`}
                >
                    {t(lng.lang)}
                </LanguageButton>
            ))}
        </ButtonContainer>
    );
};

export default LanguageSelector;