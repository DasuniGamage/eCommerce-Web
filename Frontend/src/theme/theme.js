import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main:'#764EE8',
        },
        secondary: {
            dark: '#C8B8F6',
            main: '#F2EEFF',
            light: '#F9F8FB'
        },
        black: {
            main: '#000000',
        },
        white: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Plus Jakarta Sans, Arial, sans-serif', 
        allVariants: {
          fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '28.95px',
        },
        h1: {
          fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
          fontSize: 32,
          fontWeight: 600,
          lineHeight: '28.95px',
          textAlign: 'left',
        },
        h3: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '28.95px',
            textAlign: 'left',
          },
        h4: {
            fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '28.95px',
            textAlign: 'left',
          },
      },
})

export default theme;