import React, { Fragment } from 'react'
import { Link } from './style'

const AppBar = () => (
  <Fragment>
    <Link to="/" >Page 1</Link>
    <Link to="/p2" >Page 2</Link>
    <Link to="/p3" >Page 3</Link>
    <Link to="/p4" >Page 4</Link>
  </Fragment>
)

export default AppBar
