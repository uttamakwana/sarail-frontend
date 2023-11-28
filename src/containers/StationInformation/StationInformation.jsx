import React, { useContext } from "react";
import "./statoin-information.css";
import {
  MapIcon,
  AlertIcon,
  ViewStopIcon,
  Train2Icon,
  ReservationIcon,
  WaitingTimeIcon,
  DirectionIcon,
  CalendarIcon,
  LocationIcon,
} from "../../constants/icons";
import { useTranslation } from "react-i18next";
// importing context
import { Context } from "../../context/ContextProvider.jsx";

const StationInformation = () => {
  // for translation
  const { t } = useTranslation();
  // context
  const { selectedLanguage } = useContext(Context);

  return (
    <main className="flex-column station-information-container">
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">{t("Station Information")}</h1>
        <div className="flex">
          <div className="station-badge">
            <MapIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Station Map")}
            </strong>
          </div>
          <div className="station-badge">
            <LocationIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Nearby Shop")}
            </strong>
          </div>
          <div className="station-badge">
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
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">{t("Platform Information")}</h1>
        <div className="flex-between">
          <div className="station-badge">
            <DirectionIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Journeys")}
            </strong>
          </div>
          <div className="station-badge">
            <WaitingTimeIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Wait Time")}
            </strong>
          </div>
          <div className="station-badge">
            <ReservationIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Reservation")}
            </strong>
          </div>
        </div>
      </section>
      <section className=" bg-clr-accent4 p-1 br-5">
        <h1 className="subheading">{t("Train Information")}</h1>
        <div className="flex-between">
          <div className="station-badge">
            <Train2Icon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Trains Now")}
            </strong>
          </div>
          <div className="station-badge">
            <ViewStopIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("View Stop")}
            </strong>
          </div>
          <div className="station-badge">
            <AlertIcon className="station-badge-icon" />
            <strong
              className={`text ${
                selectedLanguage === "Gujarati" ? "text-gujarati" : ""
              }`}
            >
              {t("Send Alert")}
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StationInformation;
