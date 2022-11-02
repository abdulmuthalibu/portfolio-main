import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./utils/globals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
