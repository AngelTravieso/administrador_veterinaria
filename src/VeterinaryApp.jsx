import { CssBaseline, ThemeProvider } from "@mui/material"
import { AppRouter } from "./router/AppRouter"
import { purpleTheme } from "./theme/purpleTheme"

export const VeterinaryApp = () => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <AppRouter />
    </ThemeProvider>
  )
}
