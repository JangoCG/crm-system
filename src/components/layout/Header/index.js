import React from 'react'
import { Header } from './Header'
import styled from 'styled-components'

const Nav = styled.nav`
  list-style: none;

  li,
  a {
    display: inline-block;
    padding: 0px 20px;
    color: rgb(52, 69, 99);
    text-decoration: none;
    font-family: 'Noto Sans JP', sans-serif;
    &:hover {
      color: rgba(52, 69, 99, 0.8);
    }
  }
`

const UserProfileIcon = styled.i`
  padding: 9px 25px;
  color: rgba(52, 69, 99, 1);
  font-size: 23px;
  &:hover {
    color: rgba(52, 69, 99, 0.8);
  }
`

const Icon = styled.i`
  color: rgb(51, 99, 209, 1);
  margin-right: auto;
`

const index = () => {
  return (
    <Header>
      <Icon className='fa fa-leaf fa-2x'></Icon>
      <Nav>
        <ul>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
        </ul>
      </Nav>
      <a href='cta'>
        <UserProfileIcon className='far fa-user-circle fa-2x'></UserProfileIcon>
      </a>
    </Header>
  )
}

export default index
