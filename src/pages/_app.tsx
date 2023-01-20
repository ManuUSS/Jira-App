import '@/styles/globals.css'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from 'themes';
import type { AppProps } from 'next/app'
import { UIProvider } from 'context/ui';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
