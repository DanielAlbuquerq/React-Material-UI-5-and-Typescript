import React, { createContext, useCallback, useContext, useState } from "react"

// 1. Interface and Type______Start___________
interface IDrawerOption {
  path: string
  label: string
  icon: string
}
//_____
interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
  drawerOptions: IDrawerOption[]
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

type Props = {
  children?: React.ReactNode
}
//_________________End____________________

//2. ______Context Hook Function_________Start_____
const DrawerContext = createContext({} as IDrawerContextData)
console.log(DrawerContext)

export const useDrawerContext = () => {
  console.log("DrawerContextActivated")
  return useContext(DrawerContext)
}
//Context created. Values saved on '<DrawerContext.Provider/>'
//_________________________________End_______________

//
export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

  //useCallback for a better perfomance
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
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
