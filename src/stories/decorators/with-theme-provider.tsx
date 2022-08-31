import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FC } from 'react'

import { ThemeProvider } from '../../styles/theme-provider'

type StoryContext = Record<string, unknown> & {
  globals: { colorScheme: string }
  parameters: Record<string, unknown>
}

const withThemeProvider = (Story: FC<StoryContext>, context: StoryContext) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider>
        <Story {...context} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export { withThemeProvider }
