import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./components/Theme/ThemeContext";
import { CssBaseline } from "@mui/material";
import { AuthContextProvider } from "./components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ThemeProviderWrapper>
        <CssBaseline />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProviderWrapper>
    </AuthContextProvider>
  </BrowserRouter>
);
