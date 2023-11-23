// importing context
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";

// importing components
import { Header } from "../../components";

const Home = () => {
  // variables of context
  const { selectedLanguage } = useContext(Context);
  return (
    <main className="home-page">
      <Header />
      <h2 className="subheading text-center">Select Station</h2>
      <div className="search-box">
        <div className="search-input">
          <input
            type="text"
            name="station-search"
            id="station-search"
            className='input'
            placeholder="Search your station..."
            autoComplete="off"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
