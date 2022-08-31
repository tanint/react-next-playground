import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { FC, ReactNode } from 'react'

import { customTheme } from './theme'

export const ThemeProvider: FC<{ children?: ReactNode }> = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
