import { ThemeProvider } from '@mui/material';

import { AuthProvider } from './auth/context';
import { AppRouter } from './router/AppRouter';
import { purpleTheme } from './theme/purpleTheme';

export const VeterinaryApp = () => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  )
}
