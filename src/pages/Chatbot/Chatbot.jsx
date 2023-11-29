import React, { useContext, useTransition } from "react";
import "./chatbot.css";
// import component
import { Header } from "../../components";
import {
  ALetterLogo,
  ChatBotLogo,
  ChatbotPrimaryLogo,
  MicrophoneLogo,
  UserQueryLogo,
} from "../../constants/images";
import { ChatInput, StationInformation, Chats } from "../../containers";
import { Context } from "../../context/ContextProvider";
import { useTranslation } from "react-i18next";
import { CalendarIcon, LocationIcon, MapIcon } from "../../constants/icons";

const Chatbot = () => {
  const { selectedLanguage } = useContext(Context);

  const { t } = useTranslation();

  return (
    <main className="chatbot-page bg-clr-accent4">
      <Header />
      <div className="clr-primary text-center chatbot-heading mb-1">
        <p className="text max-350 margin-auto flex">
          Ask chintu the{" "}
          <img
            src={ChatbotPrimaryLogo}
            alt="chatbot-logo"
            style={{ width: "30px", height: "30px" }}
          />{" "}
        </p>
        <p className="text max-350 margin-auto">Information you need</p>
      </div>
      {/* <StationInformation /> */}
      <section className="p-1 br-5">
        {/* <h1 className="subheading">{t("Station Information")}</h1> */}
        <div className="flex">
          <div className="station-badge bg-clr-accent4 p-8 br-5">
            <MapIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Station Map")}
            </strong>
          </div>
          <div className="station-badge bg-clr-accent4 p-8 br-5">
            <LocationIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Nearby Shop")}
            </strong>
          </div>
          <div className="station-badge bg-clr-accent4 p-8 br-5">
            <CalendarIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Time Table")}
            </strong>
          </div>
        </div>
      </section>
      {/* Chats */}
      <Chats />
      {/* Inputs for user */}
      <ChatInput />
    </main>
  );
};

export default Chatbot;
