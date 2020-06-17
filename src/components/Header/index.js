import React from 'react'
import { Nav, UserProfile, Logo, Header, LogoWrapper, LogoText } from './styled'

import styled from 'styled-components'

const index = () => {
  return (
    <Header>
      <LogoWrapper>
        <Logo className='fa fa-leaf fa-2x'></Logo>
        <LogoText>Jango CRM</LogoText>
      </LogoWrapper>
      <Nav>
        <ul>
          <li>
            <a href=''>About</a>
          </li>
        </ul>
      </Nav>
      <a href='cta'>
        <UserProfile className='far fa-user-circle fa-2x'></UserProfile>
      </a>
    </Header>
  )
}

export default index
