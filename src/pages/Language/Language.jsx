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

const Language = () => {
  // importing states from the context
  const { setSelectedLanguage, selectedLanguage } = useContext(Context);

  // creating variable of useNavigate for navigation
  const navigate = useNavigate();

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
        Select your language
      </h1>
      <section className="language-container mi-1">
        <ul className="language-list text">
          <li
            className="language-list-item br-5"
            onClick={() => setSelectedLanguage("Hindi")}
          >
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">Hindi</span>
          </li>
          <li
            className="language-list-item br-5"
            onClick={() => setSelectedLanguage("Gujarati")}
          >
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">Gujarati</span>
          </li>
          <li
            className="language-list-item br-5"
            onClick={() => setSelectedLanguage("English")}
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
