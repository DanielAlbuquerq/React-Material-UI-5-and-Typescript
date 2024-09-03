import { createTheme } from "@mui/material"
import { cyan, green, red, yellow } from "@mui/material/colors"

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: red[700],
      dark: yellow[800],
      light: yellow[700],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
})
