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
  toolsBar?: React.ReactNode
}

export const PageBaseLayout: React.FC<IPageBaseLayout> = ({
  children,
  title,
  toolsBar,
}) => {
  const theme = useTheme()
  const { toggleDrawerOpen } = useDrawerContext()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"))
  const mdDown = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box
        display='flex'
        padding={1}
        alignItems='center'
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton>
            <Icon onClick={toggleDrawerOpen}></Icon>
          </IconButton>
        )}

        <Typography
          textOverflow='ellipsis'
          overflow='hidden'
          whiteSpace='nowrap'
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {title}
        </Typography>
      </Box>
      {toolsBar && <Box bgcolor='red'>{toolsBar}</Box>}
      <Box bgcolor='blue' flex={1} overflow='auto'>
        {children}
      </Box>
    </Box>
  )
}
