import { Box, Typography } from "@mui/material"
import React from "react"

interface IPageBaseLayout {
  title: string
  children: React.ReactNode
}

export const PageBaseLayout: React.FC<IPageBaseLayout> = ({
  children,
  title,
}) => {
  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box>
        <Typography>{title}</Typography>
      </Box>
      <Box>Tools bar</Box>
      <Box>{children}</Box>
    </Box>
  )
}
