import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          min-height: 100vh;
          font-family: 'poppins';
          background: black;
        }
        main {
          min-height: 90vh;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        input, select, textarea {
          font-family: poppins;
        }
        input:focus-visible, select:focus-visible, button:focus-visible, textarea:focus-visible {
          outline: none;
          border-radius: 0;
        }
        address {
          font-style: normal;
        }
      `,
    },
  },
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1441,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
