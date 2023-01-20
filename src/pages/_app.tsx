import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { UIProvider } from 'context/ui';
import { EntriesProvider } from '../../context/entries';
import { lightTheme, darkTheme } from 'themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}
