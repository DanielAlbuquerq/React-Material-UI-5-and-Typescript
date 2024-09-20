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
import React from "react"
import { useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"

//-------
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

const ListItemLink: React.FC<IListItemLinkProps> = ({
  icon,
  label,
  onClick,
  to,
}) => {
  //
  const navigate = useNavigate()

  //path hook from react
  const resolvedPath = useResolvedPath(to)
  console.log(resolvedPath)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  //
  const handleClick = () => {
    navigate(to)
    onClick?.()
  }
  //
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

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
      >
        <Box
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
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
