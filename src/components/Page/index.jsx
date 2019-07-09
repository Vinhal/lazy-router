import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title } from './style'

const Page = ({ title }) => (
  <Container>
    <Title color="primary" component="h1" variant="h4">
      {title}
    </Title>
  </Container>
)

Page.propTypes = {
  title: PropTypes.string
}

export default Page
