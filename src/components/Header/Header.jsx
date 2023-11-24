import "./header.css";
// importing icons
import { MenuIcon, CloseIcon, NextIcon } from "../../constants/icons.js";
// importing logos
import { EnglishLogo, IndiaLogo, SarailLogo } from "../../constants/images.js";
// importing useState, useContext
import { useContext, useState } from "react";
// importing context
import { Context } from "../../context/ContextProvider.jsx";
// importing useTranslation
import { useTranslation } from "react-i18next";
// importing container
import { HamburgerMenu } from "../../containers";
// importing useLocation
import { useLocation } from "react-router-dom";

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

  // creating a language logo
  let languageLogo = EnglishLogo;
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
      <h1 className="heading header-heading flex">
        {/* <TrainIcon /> Sarail */}
        <img src={SarailLogo} alt="logo" id="sarail-logo" /> {t("Sarail")}
      </h1>
      {headerActive ? (
        <CloseIcon
          className="header-menu-icon"
          onClick={() => setHeaderActive(false)}
        />
      ) : location.pathname === "/home" ? (
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
            style={{ color: "var(--color-complement)" }}
          >
            {selectedLanguage}
          </p>
        </div>
      ) : (
        " "
      )}
      {location.pathname === "/home" && headerActive ? (
        <HamburgerMenu setHeaderActive={setHeaderActive} />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
