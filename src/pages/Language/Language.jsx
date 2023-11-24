// language icon
import { LanguageIcon, NextIcon } from "../../constants/icons.js";
// importing components
import { Header } from "../../components";
// importing language css
import "./language.css";
// importing images
import { EnglishLogo, IndiaLogo } from "../../constants/images.js";
import Random from "../../components/Random/Random.jsx";
// importing context and useContext
import { useContext } from "react";
import { Context } from "../../context/ContextProvider.jsx";
//importing useNavigate for navigation
import { useNavigate } from "react-router-dom";
import i18n from "../../i18.js";
import { useTranslation } from "react-i18next";

const Language = () => {
  // importing states from the context
  const { setSelectedLanguage, selectedLanguage } = useContext(Context);

  // creating variable of useNavigate for navigation
  const navigate = useNavigate();

  // for trasnlation
  const { t } = useTranslation();

  // function handleClick
  function handleClick() {
    if (!selectedLanguage) return alert("Please select a language");
    navigate("/home");
  }
  return (
    <main className="language-page">
      <Header />
      <h1 className="language-heading subheading mb-1 flex-center">
        <LanguageIcon className="big-icon" />
        {t("Select Your Language")}
      </h1>
      <section className="language-container mi-1">
        <ul className="language-list text">
          <li
            className="language-list-item br-5"
            onClick={() => {
              setSelectedLanguage("Hindi");
              i18n.changeLanguage("hi");
            }}
          >
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">हिंदी</span>
          </li>
          <li
            className="language-list-item br-5"
            onClick={() => {
              setSelectedLanguage("Gujarati");
              i18n.changeLanguage("gu");
            }}
          >
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">ગુજરાતી</span>
          </li>
          <li
            className="language-list-item br-5"
            onClick={() => {
              setSelectedLanguage("English");
              i18n.changeLanguage("en");
            }}
          >
            <img src={EnglishLogo} alt="en-US" className="accent3-border" />
            <span className="language-list-item-text">English</span>
          </li>
          <li className="language-list-item br-5">
            {/* <img src={EnglishLogo} alt="en-US" className="accent3-border" /> */}
            {selectedLanguage ? (
              <span className="language-list-item-text">
                you have selected <strong>{selectedLanguage}</strong> language
              </span>
            ) : (
              ""
            )}
          </li>
        </ul>
      </section>
      <div className="language-next-button-container">
        <NextIcon className="language-next-button" onClick={handleClick} />
      </div>
      {/* Random component tryting to put into it */}
    </main>
  );
};

export default Language;
