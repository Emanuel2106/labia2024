import React from 'react'
import ReactDOM from 'react-dom/client'
//import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)





