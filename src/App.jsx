import { Suspense, useContext } from "react";
import "./App.css";
// importinng loading component
import Loading from "./components/Loading/Loading";
// importing utils functions
import { loadingAnimation } from "./utils/app";
// importing context from context provider
import { Context } from "./context/ContextProvider";
// import routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Announcement, Chatbot, Home, Language } from "./pages";
// importing i18n
import i18n from "./i18";

const App = () => {
  // state variables from the context
  const { loadingState, setLoadingState } = useContext(Context);
  // loading animation function
  // does: this function execute animation for 5sec then redirect to home page
  // loadingAnimation(setLoadingState);
  function Roller() {
    return <>Loading...</>;
  }

  return loadingState ? (
    <Loading loading={loadingState} setLoading={setLoadingState} />
  ) : (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Language />} />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<Roller />}>
              <Home />
            </Suspense>
          }
        />
        <Route exact path="announcements" element={<Announcement />} />
        <Route exact path="chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
