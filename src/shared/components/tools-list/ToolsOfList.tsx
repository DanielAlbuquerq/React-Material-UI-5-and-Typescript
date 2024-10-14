import { Box, Button, Paper, useTheme, TextField, Icon } from "@mui/material"
import React from "react"

// 1. Interface_____________Start__________________

interface IListOfToolsProps {
  searchText?: string
  showSearchInput?: boolean
  valueOnChange?: (newText: string) => void

  textNewButton?: string
  showNewButton?: boolean
  onClickButton?: () => void
}

//______________________End_____________________

export const ListOfTools: React.FC<IListOfToolsProps> = ({
  // 2. setting start values to types from interface________start__
  searchText = " ",
  showSearchInput = false,
  valueOnChange,
  //__
  textNewButton = "New",
  showNewButton = true,
  onClickButton,
  //__________________________________End______________
}) => {
  const theme = useTheme()

  return (
    // 3. ________Style Block _____ Start______________
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
      {showSearchInput && (
        <TextField
          value={searchText}
          onChange={(e) => valueOnChange?.(e.target.value)}
          placeholder='search...'
          size='small'
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {showNewButton && (
          <Button
            disableElevation
            color='primary'
            variant='contained'
            onClick={onClickButton}
            endIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
      </Box>
    </Box>
  )
  //______Style Block______________End__________
}
