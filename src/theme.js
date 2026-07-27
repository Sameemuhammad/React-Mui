import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
    secondary: {
      main: '#0EA5E9',
    },
    background: {
      default: '#F4F6F8',
    },
  },
  shape: {
    borderRadius: 10,
  },
})

export default theme
