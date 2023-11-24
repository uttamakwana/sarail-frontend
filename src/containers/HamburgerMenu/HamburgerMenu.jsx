// importing useContext
import { useContext } from "react";
// importing logos
import { IndiaLogo, EnglishLogo } from "../../constants/images.js";
// importing context
import { Context } from "../../context/ContextProvider.jsx";
import i18n from '../../i18.js';

// container starts...
const HamburgerMenu = ({ setHeaderActive }) => {
  // variables of context
  const { setSelectedLanguage } = useContext(Context);

  return (
    <main className="header-navigation absolute">
      <ul className="header-navigation-list">
        <li
          className="text header-navigation-list-item flex"
          onClick={() => {
            setSelectedLanguage("Gujarati");
            setHeaderActive(false);
            i18n.changeLanguage("gu")
          }}
        >
          <img src={IndiaLogo} alt="Gu" /> Gujarati
        </li>
        <li
          className="text header-navigation-list-item flex"
          onClick={() => {
            setSelectedLanguage("Hindi");
            setHeaderActive(false);
            i18n.changeLanguage("hi");
          }}
        >
          <img src={IndiaLogo} alt="Hi" /> Hindi
        </li>
        <li
          className="text header-navigation-list-item flex"
          onClick={() => {
            setSelectedLanguage("English");
            setHeaderActive(false);
            i18n.changeLanguage("en");

          }}
        >
          <img src={EnglishLogo} alt="En" /> English
        </li>
        {/* <li className="text header-navigation-list-item">Login</li> */}
      </ul>
    </main>
  );
};

export default HamburgerMenu;
