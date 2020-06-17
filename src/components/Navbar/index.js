import React from 'react'
import { NavItem, Navbar } from './styled'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
const firstItem = {
  height: '27px'
}
const index = () => {
  return (
    <Navbar>
      <ul>
        <NavItem style={firstItem}>
          <Link to='/Leads'>Leads</Link>
        </NavItem>
        <NavItem>
          <Link to='/Opportunities'>Opportunities</Link>
        </NavItem>
        <NavItem>Customers</NavItem>
        <NavItem>Products</NavItem>
      </ul>
    </Navbar>
  )
}

export default index
