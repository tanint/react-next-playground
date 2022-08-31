import React, { FC, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { ThemeProvider } from '@/styles'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<React.PropsWithChildren<ProvidersProps>> = (props) => {
  const { children } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider>{children}</ThemeProvider>
    </LocalizationProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
