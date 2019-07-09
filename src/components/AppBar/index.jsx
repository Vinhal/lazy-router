import React from 'react'
import PropTypes from 'prop-types'
import {
  Hidden
} from '@material-ui/core'

import {
  Menu as MenuIcon
} from '@material-ui/icons'

import {
  StyledIconButton,
  StyledAppBar,
  StyledToolbar,
  Title
} from './style'
import Links from './Links'

const AppBar = ({ openSidebar, title }) => (
  <StyledAppBar>
    <StyledToolbar>
      <StyledIconButton color="inherit" aria-label="Menu" onClick={openSidebar}>
        <MenuIcon />
      </StyledIconButton>

      <Links />

      <Title variant="h6" size={240} noWrap>
        <Hidden smDown implementation="css">
          {title}
        </Hidden>
      </Title>
    </StyledToolbar>
  </StyledAppBar>
)

AppBar.propTypes = {
  openSidebar: PropTypes.func,
  title: PropTypes.string
}
export { AppBar }

export default AppBar
