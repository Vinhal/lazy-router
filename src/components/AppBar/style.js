import styled, { css } from 'styled-components'
import { IconButton, AppBar, Typography, Toolbar } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
  && {
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
    flex-direction: row;
    background: ${({ theme }) => `linear-gradient(106.31deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.baby} 158.83%)`};
    box-shadow: none;
  }
`
const Title = styled(Typography)`
  && {
    color: ${({ theme }) => theme.palette.common.white};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: bold;
    flex-grow: 1;

    ${({ theme }) => css`
      ${theme.breakpoints.up('md')} {
        margin-left: ${({ theme }) => theme.spacing.unit * 2}px;
      }
    `}        
  }
`

const StyledToolbar = styled(Toolbar)`
  && {
    align-self: center;
    flex: 1;
    align-items: center;
    padding: 0px;
    margin-right: ${({ theme }) => theme.spacing.unit * 14}px;
  }
`
const StyledIconButton = styled(IconButton)`
  && {
    width: ${({ theme }) => theme.spacing.unit * 7}px;
  }
`

const Link = styled(RouterLink)`
  && {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.black};
    margin-right: ${({ theme }) => theme.spacing.unit}px;
  }
`

export {
  StyledToolbar,
  StyledIconButton,
  StyledAppBar,
  Title,
  Link
}
