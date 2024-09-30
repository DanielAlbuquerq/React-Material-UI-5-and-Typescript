import { Margin } from "@mui/icons-material"
import { Box, Button, Paper, TextField, useTheme } from "@mui/material"
import React from "react"

export const Toolsbar: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      height={theme.spacing(5)}
      alignItems='center'
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      display='flex'
      component={Paper}
    >
      <TextField placeholder='search...' size='small' />
      <Button>New</Button>
    </Box>
  )
}
