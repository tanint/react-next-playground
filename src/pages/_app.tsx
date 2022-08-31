import '../styles/global.scss'

import { AppProps } from 'next/app'
import { useState } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { EmotionCache } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { SnackbarProvider } from 'notistack'
import NextNProgress from 'nextjs-progressbar'

import { queryConfig } from '@/lib/react-query'
import { PageComponent } from '@/types/next-page'
import { ThemeProvider } from '@/styles'
import { EmotionCacheProvider } from '@/lib/emotion'

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: PageComponent
}

function MyApp(props: CustomAppProps) {
  const { Component, emotionCache, pageProps } = props

  const [queryClient] = useState(() => {
    return new QueryClient({ defaultOptions: queryConfig })
  })

  const getLayout = Component.getLayout ?? ((page) => page)
  const renderComponent = getLayout(<Component {...pageProps} />)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <EmotionCacheProvider emotionCache={emotionCache}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {process.env.NODE_ENV !== 'test' && (
              <ReactQueryDevtools position="bottom-right" />
            )}
            <DefaultSeo
              defaultTitle="Playground"
              titleTemplate="%s | Playground"
              dangerouslySetAllPagesToNoIndex
              dangerouslySetAllPagesToNoFollow
              additionalLinkTags={[
                {
                  rel: 'icon',
                  href: '/favicon.ico',
                },
              ]}
            />

            <ThemeProvider>
              <SnackbarProvider
                anchorOrigin={{
                  horizontal: 'center',
                  vertical: 'top',
                }}
              >
                <NextNProgress color="#00ce7c" stopDelayMs={50} height={2} />
                {renderComponent}
              </SnackbarProvider>
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </EmotionCacheProvider>
    </LocalizationProvider>
  )
}

export default MyApp
