/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import { useEffect } from "react"
import { Dashboard } from "../pages"

//I name it as AppRoutes to avoid conflict with new features of react-router-dom-v6
export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "initial-page",
        path: "/initial-page",
      },
      {
        icon: "star",
        label: "cities",
        path: "/cities",
      },
    ])
  }, [])

  return (
    <Routes>
      <Route
        path='/initial-page'
        element={
          // eslint-disable-next-line react/react-in-jsx-scope
          <Dashboard />
        }
      />
      <Route path='*' element={<Navigate to='/initial-page' />} />
      <Route path='/cities' element={<h1>Hello City Path</h1>} />
    </Routes>
  )
}
