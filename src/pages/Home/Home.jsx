// importing context
import { useContext, useState } from "react";
import { Context } from "../../context/ContextProvider";

// importing components
import { Header } from "../../components";
// importing useTraslation
import { useTranslation } from "react-i18next";
// importing stationData
import stationData from "../../utils/stationData.js";
// importing icons
import { SearchIcon } from "../../constants/icons";
// importing css
import "./home.css";
import { StationInformation } from "../../containers/index.js";

const Home = () => {
  // variables of context
  const { selectedLanguage } = useContext(Context);
  // for translation
  const { t } = useTranslation();
  // state for staionData
  const [stations, setStations] = useState([]);
  // state for activeStationInput
  const [activeInput, setActiveInput] = useState(false);
  // state for station value
  const [stationName, setStationName] = useState("");

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
        <p className="text max-350 margin-auto">
          you have selected{" "}
          <strong className="strong-text">{stationName}</strong>
        </p>
      ) : (
        ""
      )}
      {/* Station Information */}
      <StationInformation />
    </main>
  );
};

export default Home;
