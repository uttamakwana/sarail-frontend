// importing context
import { useContext, useState } from "react";
import { Context } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

// importing components
import { BottomTabs, Header } from "../../components";
// importing useTraslation
import { useTranslation } from "react-i18next";
// importing stationData
import stationData from "../../utils/stationData.js";
// importing icons
import { NextIcon, SearchIcon } from "../../constants/icons";
// importing css
import "./home.css";
import { StationInformation } from "../../containers/index.js";

const Home = () => {
  // navigation
  const navigate = useNavigate();
  // variables of context
  const { selectedLanguage, stationName, setStationName } = useContext(Context);
  // for translation
  const { t } = useTranslation();
  // state for staionData
  const [stations, setStations] = useState([]);
  // state for activeStationInput
  const [activeInput, setActiveInput] = useState(false);
  // state for station value


  // function handleSearchOptions
  let result = [];
  const handleSearchOptions = (e) => {
    setStationName(e.target.value);
    if (e.target.value) {
      // setStationName(e.target.value);
      setActiveInput(true);
    }
    if (!e.target.value) {
      setActiveInput(false);
    }
    result = stationData.filter((station) =>
      station.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setStations(result);
    console.log(result);
  };

  // function handleClick
  const handleClick = () => {
    if (!stationName) {
      alert("Please select a station to get announcements!");
    } else {
      alert("Success");
      navigate("/announcements");
    }
  };

  const searchInput = document.getElementById("station-search");

  return (
    <main className="home-page">
      <Header />
      <h2 className="subheading text-center clr-primary">
        {t("Select Station")}
      </h2>
      <div className="search-box">
        <div className="search-input flex-center">
          <div className="search-input-wrapper flex-center">
            <input
              type="text"
              value={stationName}
              name="station-search"
              id="station-search"
              className="input text"
              placeholder={t("Search your station")}
              autoComplete="off"
              onChange={handleSearchOptions}
            />
            <SearchIcon className="search-icon" />
          </div>
          <ul
            className={`search-station-suggestions ${
              activeInput ? "active" : ""
            }`}
          >
            {stations.length !== stationData.length
              ? stations.map((station) => (
                  <li
                    className="search-station-suggested-item text clr-complement"
                    key={station.id}
                    onClick={() => {
                      setStationName(station.name);
                      setStations([]);
                    }}
                  >
                    <span>{t(station.name)}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      {stationName ? (
        <p className="text max-350 margin-auto" style={{ marginBlock: "8px" }}>
          {t("You have selected")}{" "}
          <strong className="strong-text">{t(`${stationName}`)}</strong>
        </p>
      ) : (
        ""
      )}
      {/* Station Information */}
      <StationInformation />
      {/* Bottom Tabs */}
      {/* <BottomTabs /> */}
      <div className="forward-button">
        <NextIcon onClick={handleClick} />
      </div>
    </main>
  );
};

export default Home;
