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

const Home = () => {
  // variables of context
  const { selectedLanguage } = useContext(Context);
  // for translation
  const { t } = useTranslation();
  // state for staionData
  const [stations, setStations] = useState([]);

  // function handleSearchOptions
  let result = [];
  const handleSearchOptions = (e) => {
    result = stationData.filter((station) =>
      station.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setStations(result);
    console.log(result);
  };

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
              name="station-search"
              id="station-search"
              className="input text"
              placeholder="Search your station..."
              autoComplete="off"
              onChange={handleSearchOptions}
            />
            <SearchIcon className="search-icon" />
          </div>
          <ul className="search-station-suggestions">
            {stations.length !== stationData.length
              ? stations.map((station) => (
                  <li
                    className="search-station-suggested-item text clr-complement"
                    key={station.id}
                  >
                    {t(station.name)}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
