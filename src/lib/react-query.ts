import { DefaultOptions } from '@tanstack/react-query'

export const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
}
