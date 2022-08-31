import { createTheme } from '@mui/material/styles'

import { palette } from './palette'
import { shadows } from './shadows'

// Create a theme instance.
export const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
  },
  palette,
  shadows,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  },
})
