import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// router
import AppRoutes from "config/routes/routes";
import { RouterProvider } from "react-router-dom";

// redux
import store from "state/store";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "style/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={AppRoutes} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
