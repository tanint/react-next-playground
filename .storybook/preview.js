import { withThemeProvider } from '../src/stories/decorators/with-theme-provider'

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
