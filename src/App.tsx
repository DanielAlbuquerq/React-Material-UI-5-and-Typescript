/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AppThemeProvider, DrawerProvider } from "./shared/contexts"
import { Sidebar } from "./shared/components"
import { PageBaseLayout } from "./shared/layouts/PageBaseLayout"

export const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default App
