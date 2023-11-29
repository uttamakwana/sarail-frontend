import "./header.css";
// importing icons
import { CloseIcon, NextIcon } from "../../constants/icons.js";
// importing logos
import {
  ChatBotLogo,
  EnglishLogo,
  IndiaLogo,
  SarailLogo,
} from "../../constants/images.js";
// importing useState, useContext
import { useContext, useState } from "react";
// importing context
import { Context } from "../../context/ContextProvider.jsx";
// importing useTranslation
import { useTranslation } from "react-i18next";
// importing container
import { HamburgerMenu } from "../../containers";
// importing useLocation
import { useLocation, useNavigate } from "react-router-dom";

// component starts...
const Header = () => {
  // creating state for hamburgerMenu is active or not
  const [headerActive, setHeaderActive] = useState(false);
  // for translation in mutlilingual
  const { t } = useTranslation();
  // for url path
  const location = useLocation();
  // variables of context
  const { selectedLanguage } = useContext(Context);
  // navigation
  const navigate = useNavigate();
  // creating a language logo
  let languageLogo = EnglishLogo;
  // according to the language change logo
  switch (selectedLanguage) {
    case "English":
      languageLogo = EnglishLogo;
      break;
    case "Hindi":
      languageLogo = IndiaLogo;
      break;
    case "Gujarati":
      languageLogo = IndiaLogo;
      break;
  }
  return (
    <header
      className={`header flex-between pi-1 relative ${
        headerActive ? "active" : ""
      }`}
    >
      {/* Chatbot Header if chatbot page otherwise Sarail Logo */}
      {location.pathname === "/chatbot" ? (
        <>
          <div className="flex">
            <NextIcon
              className="big-icon"
              style={{ rotate: "180deg" }}
              onClick={() => navigate("/announcements")}
            />
            {/* <TrainIcon /> Sarail */}
            <img
              src={ChatBotLogo}
              alt="chatbot-logo"
              className="big-icon mi-1"
            />
            <div className="flex-column clr-accent1">
              <h2 style={{ margin: 0 }} className="text">
                {t("Ask Chintu")}
              </h2>
              <p className="text">Get informed</p>
            </div>
          </div>
        </>
      ) : (
        <h1 className="heading header-heading flex">
          <img src={SarailLogo} alt="logo" id="sarail-logo" /> {t("Sarail")}
        </h1>
      )}
      {/* if header is active show close icon */}
      {headerActive ? (
        <CloseIcon
          className="header-menu-icon"
          onClick={() => setHeaderActive(false)}
        />
      ) : location.pathname === "/home" ||
        location.pathname === "/announcements" ||
        location.pathname === "/chatbot" ? (
        <div>
          <div
            className="flex"
            style={{ gap: "3px", cursor: "pointer" }}
            onClick={() => setHeaderActive(true)}
          >
            <img
              src={languageLogo}
              alt="Language Logo"
              className="header-language-logo"
            />
            <NextIcon
              style={{ rotate: "90deg", fill: "var(--color-accent1)" }}
            />
          </div>
          <p
            className="text text-center"
            style={{ color: "var(--color-accent1)" }}
          >
            {selectedLanguage}
          </p>
        </div>
      ) : (
        " "
      )}
      {(location.pathname === "/home" ||
        location.pathname === "/announcements" ||
        location.pathname === "/announcements") &&
      headerActive ? (
        <HamburgerMenu setHeaderActive={setHeaderActive} />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
