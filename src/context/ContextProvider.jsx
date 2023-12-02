import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // creating a loader with the loading state
  const [loadingState, setLoadingState] = useState(false);
  // selecting the language with the selectedLanguage state
  const [selectedLanguage, setSelectedLanguage] = useState("");
  // station name
  const [stationName, setStationName] = useState("");

  return (
    <Context.Provider
      value={{
        loadingState,
        setLoadingState,
        selectedLanguage,
        setSelectedLanguage,
        stationName, setStationName
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
