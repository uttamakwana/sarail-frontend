import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);

  return (
    <Context.Provider value={{ loadingState, setLoadingState }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
