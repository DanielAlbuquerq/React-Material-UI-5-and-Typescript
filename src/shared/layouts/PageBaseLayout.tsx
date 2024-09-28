import {
  Icon,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { Box } from "@mui/system"
import { useDrawerContext } from "./../contexts"

import React from "react"

interface IPageBaseLayout {
  title: string
  children: React.ReactNode
}

export const PageBaseLayout: React.FC<IPageBaseLayout> = ({
  children,
  title,
}) => {
  const theme = useTheme()
  const { toggleDrawerOpen } = useDrawerContext()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box
        display='flex'
        padding={1}
        alignItems='center'
        height={theme.spacing(12)}
      >
        {smDown && (
          <IconButton>
            <Icon onClick={toggleDrawerOpen}></Icon>
          </IconButton>
        )}

        <Typography variant='h5'>{title}</Typography>
      </Box>
      <Box>Tools bar</Box>
      <Box>{children}</Box>
    </Box>
  )
}
