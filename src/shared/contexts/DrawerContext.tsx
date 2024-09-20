import React, { createContext, useCallback, useContext, useState } from "react"

// Interfaces & Types______
interface IDrawerOption {
  path: string
  label: string
  icon: string
}

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
  drawerOptions: IDrawerOption[]
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

type Props = {
  children?: React.ReactNode
}
//_____________________________________

//Context Hook Function___________
const DrawerContext = createContext({} as IDrawerContextData)
console.log(DrawerContext)

export const useDrawerContext = () => {
  console.log("DrawerContextActivated")
  return useContext(DrawerContext)
}
//_________________________________

//
export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      console.log(newDrawerOptions)
      setDrawerOptions(newDrawerOptions)
    },
    []
  )
  //
  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
