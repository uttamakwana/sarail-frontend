import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // creating a loader with the loading state
  const [loadingState, setLoadingState] = useState(false);
  // selecting the language with the selectedLanguage state
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <Context.Provider
      value={{
        loadingState,
        setLoadingState,
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
