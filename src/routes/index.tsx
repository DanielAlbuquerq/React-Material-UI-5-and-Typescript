/* eslint-disable react/react-in-jsx-scope */
import { Button } from "@mui/material"
import { Route, Routes, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"

//I name it as AppRoutes to avoid conflict with new features of react-router-dom-v6
export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Routes>
      <Route
        path='/initial-page'
        element={
          // eslint-disable-next-line react/react-in-jsx-scope
          <Button variant='contained' onClick={toggleDrawerOpen}>
            Click here
          </Button>
        }
      />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  )
}
