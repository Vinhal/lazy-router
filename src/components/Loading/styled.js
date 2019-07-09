import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const LoadingStyled = styled.div`
  width: 100vh;
  height: 100vh;
  color: #777;
`

const Text = styled(Typography)`
  && {
    font-weight: 400;
    margin-top: 30px;
    margin-left: 30px;
    align-self: center;
  }
`

export { LoadingStyled, Text }
