/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./shared/contexts"
import { Sidebar } from "./shared/components"

export const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppThemeProvider>
      <BrowserRouter>
        <Sidebar>
          <AppRoutes />
        </Sidebar>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
