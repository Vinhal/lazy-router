import React from 'react'
import { Switch } from 'react-router-dom'
import routes from '../../routes'
import AppRoute from './AppRoute'
import { ContainerStyled } from './style'

const Main = () => (
  <ContainerStyled>
    <Switch>
      {routes.map(route => (
        <AppRoute
          key={route.path}
          {...route}
        />
      ))}
    </Switch>
  </ContainerStyled>
)

export default Main
