import React, { useContext } from 'react'
import LeadContext from '../../context/lead/leadContext'
import { Wrapper, Form, Input, Label } from './styled'

const Leads = () => {
  const leadContext = useContext(LeadContext)
  const { firstName, lastName, email } = leadContext

  const handleOnClick = e => {
    e.preventDefault()

    console.log(firstName)
    console.log(leadContext)
  }
  return (
    <Wrapper>
      <Form action=''>
        <Label style={{ display: 'block' }}>First Name</Label>
        <Input type='text' placeholder='First Name' />
        <Label style={{ display: 'block' }}>Last Name</Label>
        <Input type='text' placeholder='Last Name' />
        <Label>Email</Label>
        <Input type='text' placeholder='Email' />
        <button onClick={handleOnClick}>Create Lead</button>
      </Form>
    </Wrapper>
  )
}

export default Leads
