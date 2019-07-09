import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'components/AppBar'
import { ContainerStyled, Main } from './style'

const Layout = ({ children, title }) => (
  <ContainerStyled>
    <AppBar title={title} />
    <Main>
      {children}
    </Main>
  </ContainerStyled>
)

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Layout
