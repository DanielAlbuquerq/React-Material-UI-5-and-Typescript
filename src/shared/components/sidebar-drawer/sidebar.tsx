import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import React, { useMemo, useState } from "react"
import { useAppThemeContext, useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"

//____Interface________start_____________
type Props = {
  children?: React.ReactNode
}
//------

interface IListItemLinkProps {
  to: string
  icon: string
  label: string
  onClick: (() => void) | undefined
}

interface clickedType {
  clientX: number
  clientY: number
}

//_______________END__________________________

const ListItemLink: React.FC<IListItemLinkProps> = ({
  icon,
  label,
  onClick,
  to,
}) => {
  const navigate = useNavigate()
  //Funtions___States____________START____
  //path-hook from react
  const resolvedPath = useResolvedPath(to)
  console.log(resolvedPath)
  const match = useMatch({ path: resolvedPath.pathname, end: false })
  //
  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  //Funtions___States____________END____
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const Sidebar: React.FC<Props> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
  const { toggleTheme } = useAppThemeContext()

  const [clickedPoints, setClickedPoints] = useState<clickedType[]>([])
  const [clickedPointsRedo, setClickedPointsRedo] = useState<clickedType[]>([])

  function whenClick(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e

    setClickedPoints([...clickedPoints, { clientX, clientY }])
    console.log(JSON.stringify(clickedPoints))
  }

  const handleUndo = () => {
    const newArrayOfPoint = [...clickedPoints]
    const undoPoint = newArrayOfPoint.pop()
    console.log(undoPoint)

    if (!undoPoint) return
    setClickedPoints(newArrayOfPoint)
    setClickedPointsRedo([...clickedPointsRedo, undoPoint])
  }

  const handleRedo = () => {
    const newUndoPoints = [...clickedPointsRedo]

    console.log(JSON.stringify(clickedPoints))
    console.log(JSON.stringify([...clickedPoints]))

    const redoPoint = newUndoPoints.pop()
    if (!redoPoint) return
    setClickedPointsRedo(newUndoPoints)
    setClickedPoints([...clickedPoints, redoPoint])
  }

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
      >
        <div style={{ paddingTop: "20px" }}>
          <button disabled={clickedPoints.length === 0} onClick={handleUndo}>
            Undo
          </button>
          <button disabled={clickedPoints.length === 0} onClick={handleRedo}>
            Redo
          </button>
        </div>
        {/* challenge */}
        {clickedPoints.map((clicked, index) => {
          return (
            <div
              style={{
                position: "absolute",
                left: clicked.clientX,
                right: clicked.clientY,
              }}
              key={index}
            >
              0
            </div>
          )
        })}

        <Box
          onClick={whenClick}
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt='Remy Sharp'
              src='https://www.cartoonize.net/wp-content/uploads/2024/05/avatar-maker-photo-to-cartoon.png'
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component='nav'>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>contrast_icon</Icon>
                </ListItemIcon>
                <ListItemText primary='theme button' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
