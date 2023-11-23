import "./header.css";
import {
  HomeIcon,
  ContactIcon,
  InfoIcon,
  TrainIcon,
  MenuIcon,
  CloseIcon,
} from "../../constants/icons.js";
import { SarailLogo } from "../../constants/images.js";
import { useState } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  return (
    <header
      className={`header flex-between pi-1 relative ${
        headerActive ? "active" : ""
      }`}
    >
      <h1 className="heading header-heading flex">
        {/* <TrainIcon /> Sarail */}
        <img src={SarailLogo} alt="logo" id="sarail-logo" /> Sarail
      </h1>
      {headerActive ? (
        <CloseIcon
          className="header-menu-icon"
          onClick={() => setHeaderActive(false)}
        />
      ) : (
        <MenuIcon
          className="header-menu-icon"
          onClick={() => setHeaderActive(true)}
        />
      )}
      <main className="header-navigation absolute">
        <ul className="header-navigation-list">
          <li className="text header-navigation-list-item flex">
            <HomeIcon /> Home
          </li>
          <li className="text header-navigation-list-item flex">
            <ContactIcon /> Contact
          </li>
          <li className="text header-navigation-list-item flex">
            <InfoIcon /> About
          </li>
          {/* <li className="text header-navigation-list-item">Login</li> */}
        </ul>
      </main>
    </header>
  );
};

export default Header;
