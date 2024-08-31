import { Button } from "@mui/material"
import { Route, Routes, Navigate } from "react-router-dom"

//I named it AppRoutes to avoid conflict with new features of react-router-dom-v6
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/initial-page' element={<Button>Click here</Button>} />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  )
}
