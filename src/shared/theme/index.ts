import { blueGrey, grey } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    lightBackground: Palette['primary']
    outlineButton: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    lightBackground: PaletteOptions['primary']
    outlineButton: PaletteOptions['primary']
  }
  interface PaletteColor {
    darker?: string
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    outlineButton: true
    neutral: true
  }
}

let theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#3e8e7e',
      light: '#7EB3A9',
      dark: '#2C6559',
      contrastText: '#fff',
      '100': '#ECF4F2',
      '200': '#C3DCD7',
    },
    secondary: {
      main: '#FABB51',
      dark: '#B2853A',
      light: '#FCD18A',
      '100': '#FDEAC9',
      '200': '#FFF8EE',
      '500': '#FFC93C',
      contrastText: '#020505',
    },
    error: {
      main: '#EA4335',
      dark: '#d53d30',
      light: '#ee695d',
      '100': '#FDEAC9',
      contrastText: '#fff',
    },
    neutral: {
      main: '#b1b2b2',
      dark: '#a4a5a5',
      light: '#c0c1c1',
      '100': '#3C3F3F',
      '200': '#F9F7F5',
      '300': '#694F22',
      '700': '#2d2d2d',
      contrastText: '#020505',
    },
    lightBackground: {
      main: '#F2F6EA',
      dark: grey[200],
      light: grey[50],
      contrastText: '#020505',
    },
    outlineButton: {
      main: '#224e45',
      dark: '#1A3C35',
      light: '#2c6559',
      contrastText: '#fff',
      '100': '#15133C',
    },
  },
  typography: {
    fontFamily: ['Radio Canada', 'Poppins', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      fontFamily: 'Poppins',
      fontSize: '1rem',
      lineHeight: '1.5',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1216,
      xl: 1536,
    },
  },

  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '15px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

//48px
theme.typography.h1 = {
  fontFamily: 'Radio Canada',
  fontSize: '3rem',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.50rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
  },
}
//40px
theme.typography.h2 = {
  fontFamily: 'Radio Canada',
  fontSize: '2.5rem',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}

//32px
theme.typography.h3 = {
  fontFamily: 'Radio Canada',
  fontSize: '2rem',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.875rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.875rem',
  },
}

//28px
theme.typography.h4 = {
  fontFamily: 'Radio Canada',
  fontSize: '1.75em',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}

//24px
theme.typography.h5 = {
  fontFamily: 'Radio Canada',
  fontSize: '1.5rem',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
}

//20px
theme.typography.h6 = {
  fontFamily: 'Radio Canada',
  fontSize: '1.125rem',
  fontWeight: '600',
  lineHeight: '1.3',
  color: '#0F1212',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}

// 18px subtitle1
theme.typography.subtitle1 = {
  fontFamily: 'Radio Canada',
  fontSize: '1.125rem',
  fontWeight: '500',
  lineHeight: '1.3',
  color: '#3C3F3F',
}

// 16px subtitle2
theme.typography.subtitle2 = {
  fontFamily: 'Radio Canada',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.3',
  color: '#3C3F3F',
}

// 16px body1
theme.typography.body1 = {
  fontFamily: 'Poppins',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5',
  color: '#3C3F3F',
}

// 14px body2
theme.typography.body2 = {
  fontFamily: 'Poppins',
  fontSize: '.875rem',
  fontWeight: '400',
  lineHeight: '1.5',
  color: '#4B4E4E',
}

// 12px caption
theme.typography.caption = {
  fontFamily: 'Poppins',
  fontSize: '.75rem',
  fontWeight: '400',
  lineHeight: '1.5',
}

//* adding default shadow use elevation={25} for paper or in sx={{boxShadow:25}} to apply the following shadow property
theme.shadows.push('0 8px 20px 0 rgb(0 0 0 / 20%)') //25 Featured Course Card 1 Shadow
theme.shadows.push('10px 10px 50px rgb(146 158 198 / 15%)') //26 Course Card 2 Shadow (All courses page course card)
theme.shadows.push('1px 1px 3px 0 rgb(0 0 0 / 50%)') //27 Course Card 3 Shadow (Single Category page course card))
theme.shadows.push('0 5px 10px rgb(0 0 0 / 20%)') //28 Text Shadow (Footer Nav Items))
theme.shadows.push('0px 4px 20px rgba(0, 0, 0, 0.05)') //29  (Category Page Course Card)))
theme.shadows.push('0px 2px 20px rgba(0, 0, 0, 0.1)') //30  ( Course Page course image and course Card)))

export default theme

export const CustomTheme = typeof theme
