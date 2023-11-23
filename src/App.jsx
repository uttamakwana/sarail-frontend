import { useContext } from "react";
import "./App.css";
// importinng loading component
import Loading from "./components/Loading/Loading";
// importing utils functions
import { loadingAnimation } from "./utils/app";
// importing context from context provider
import { Context } from "./context/ContextProvider";
// import routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Language } from "./pages";

const App = () => {
  // state variables from the context
  const { loadingState, setLoadingState } = useContext(Context);
  // loading animation function
  // does: this function execute animation for 5sec then redirect to home page
  // loadingAnimation(setLoadingState);

  return loadingState ? (
    <Loading loading={loadingState} setLoading={setLoadingState} />
  ) : (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Language />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
