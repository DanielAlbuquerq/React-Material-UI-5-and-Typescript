import { Button } from "@mui/material"
import { Route, Routes, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"

//I named it AppRoutes to avoid conflict with new features of react-router-dom-v6
export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route
        path='/initial-page'
        element={
          <Button variant='contained' onClick={toggleTheme}>
            Click here
          </Button>
        }
      />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  )
}
