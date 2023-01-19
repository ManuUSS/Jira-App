import '@/styles/globals.css'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from 'themes';
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
