import '@/styles/globals.css'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'

const basicTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ basicTheme }>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
