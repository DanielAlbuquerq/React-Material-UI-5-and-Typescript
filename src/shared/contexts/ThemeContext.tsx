import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { Box, ThemeProvider } from "@mui/material"
import { DarkTheme, LightTheme } from "../../themes"

//Typing____________Start________________
interface IThemeContextData {
  themeName: "light" | "dark"
  toggleTheme: () => void
}

type Props = {
  children?: React.ReactNode
}
//___________________End_____________________

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

//________________________________Start____________________________
//Block responsible for set value(useState) and
//pass this value to useCallback function for changing SetThemeName
//for a better perfomance
//and pass the value to useMemo to make a conditional and save it
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark")

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    )
  }, [])

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme
    return DarkTheme
  }, [themeName])
  //________________________________End____________________________

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width='100vw'
          height='100vh'
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
