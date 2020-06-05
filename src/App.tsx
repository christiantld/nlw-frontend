import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalFonts from "./fonts/fonts";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
