import React, {useState} from "react";
import {changeLanguage} from "i18next";
import {useTranslation} from "react-i18next";

const btnContainerStyle = {
    display: "flex",
    gap: "10px"
}

const buttonStyle = {
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "bold",
    backgroundColor: "#8f8f8f",
    cursor: "pointer",
    transition: "border-color 0.25s",
    color: "#ffffff",
    marginRight: "10px"
}

const hoverButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#000000"
}

const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#000000"
}

const languages = [
    {code: "fi", lang: "Finnish"},
    {code: "en", lang: "English"},
    {code: "sv", lang: "Swedish"},
]

const LanguageSelector = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedButton(lng);
    };

    return (
        <div className="btn-container">
            {languages.map((lng) => {
                return <button style={lng.code === selectedButton ? selectedButtonStyle :
                    lng.code === hoveredButton ? hoverButtonStyle : buttonStyle}
                               onMouseEnter={() => setHoveredButton(lng.code)}
                               onMouseLeave={() => setHoveredButton(null)}
                               key={lng.code}
                               onClick={() => changeLanguage(lng.code)}>
                    {lng.lang}
                </button>
            })}
        </div>
    );
};

export default LanguageSelector;