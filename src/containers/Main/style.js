import styled from 'styled-components'

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
`

const ContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${({ theme }) => theme.palette.grey[300]};
    flex-direction: column;
`
const Main = styled.main`
    flex-grow: 1;
    margin-top: ${({ theme }) => theme.spacing.unit * 12}px;
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
    margin-right: ${({ theme }) => theme.spacing.unit * 10}px;
    margin-left: ${({ theme }) => theme.spacing.unit * 14}px;
`

export { StyledContainer, ContainerStyled, Main }
