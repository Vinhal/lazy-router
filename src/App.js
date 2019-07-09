import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import theme from 'commons/constants/theme'
import Main from 'containers/Main'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'commons/styles/global'
import 'commons/i18n'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
