import { createTheme } from "@mui/material"
import { green, yellow } from "@mui/material/colors"

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[700],
      contrastText: "#ffffff",
    },
    secondary: {
      main: green[700],
      dark: yellow[800],
      light: yellow[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
})
