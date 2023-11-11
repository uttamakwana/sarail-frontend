import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// importing css
import "./styles/global.css";
import "./styles/fonts.css";
import "./styles/utils.css";
import './styles/colors.css';
import "./index.css";
// importing context provider for state management
import ContextProvider from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
