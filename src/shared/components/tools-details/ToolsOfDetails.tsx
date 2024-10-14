import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"
import React from "react"

export const ToolsOfDetails: React.FC = () => {
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
      <Button
        disableElevation
        color='primary'
        variant='contained'
        startIcon={<Icon>save</Icon>}
      >
        save
      </Button>
      <Button
        disableElevation
        color='primary'
        variant='outlined'
        startIcon={<Icon>save</Icon>}
      >
        save and return
      </Button>
      <Button
        disableElevation
        color='primary'
        variant='outlined'
        startIcon={<Icon>delete</Icon>}
      >
        delete
      </Button>
      <Button
        disableElevation
        color='primary'
        variant='outlined'
        startIcon={<Icon>add</Icon>}
      >
        new
      </Button>
      <Divider variant='middle' orientation='vertical' />
      <Button
        disableElevation
        color='primary'
        variant='outlined'
        startIcon={<Icon>arrow_back</Icon>}
      >
        return
      </Button>
    </Box>
  )
}
