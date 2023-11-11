// language icon
import { LanguageIcon, NextIcon } from "../../constants/icons.js";
// importing components
import { Header } from "../../components";
// importing language css
import "./language.css";
// importing images
import { EnglishLogo, IndiaLogo } from "../../constants/images.js";
const Language = () => {
  return (
    <main className="language-page">
      <Header />
      <h1 className="language-heading subheading mb-1 flex-center">
        <LanguageIcon className="big-icon" />
        Select your language
      </h1>
      <section className="language-container mi-1">
        <ul className="language-list text">
          <li className="language-list-item br-5">
            <img src={EnglishLogo} alt="en-US" className='accent3-border' />
            <span className="language-list-item-text">English</span>
          </li>
          <li className="language-list-item br-5">
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">Hindi</span>
          </li>
          <li className="language-list-item br-5">
            <img src={IndiaLogo} alt="en-US" />
            <span className="language-list-item-text">Gujarati</span>
          </li>
        </ul>
      </section>
      <div className="language-next-button-container">
        <NextIcon className="language-next-button" />
      </div>
    </main>
  );
};

export default Language;
