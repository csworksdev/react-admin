import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: { color: "green" },
    h2: {},
    h3: { color: "blue" },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
  },
  palette: {
    primary: { main: "#42a5f5" },
    secondary: { main: "#ba68c8" },
    error: { main: "#ef5350" },
    warning: { main: "#ff9800" },
    info: { main: "#03a9f4" },
    success: { main: "#4caf50" },
  },
//   spacing: (factor) => `${0.25 * factor}rem`,
});

export default theme;
