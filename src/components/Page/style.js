import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled(Typography)`
  && {
    font-weight: 400;
    margin-top: 300px;
  }
`

export {
  Container,
  Title
}
