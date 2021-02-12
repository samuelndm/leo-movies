import React from "react";
import Notifications from "react-notifications-component";
import Providers from "./contexts/Providers";
import Routes from "./routes";
import GlobalStyles from "./assets/styles/GlobalStyles";
import "./assets/styles/sass/base.scss";
import "react-notifications-component/dist/theme.css";

const App = () => {
  return (
    <>
      <Providers>
        <Notifications />
        <Routes />
      </Providers>

      <GlobalStyles />
    </>
  );
};

export default App;
