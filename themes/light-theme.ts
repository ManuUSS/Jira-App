import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        },
        primary: {
            main: '#dda15e'
        },
        secondary: {
            main: '#19857b',
            "100": ''

        },
        error: {
            main: red.A400
        },
        info: {
            main: '#457b9d'
        },
        text: {
            primary: '#212529'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#588157'
                }
            }
        },
    }
})