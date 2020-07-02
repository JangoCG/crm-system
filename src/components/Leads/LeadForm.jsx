import React, { useContext, useState } from "react";
//import LeadContext from "../../context/lead/leadContext";
import { LeadContext } from '../../context/LeadContext'
import { Wrapper, Form, Input, Label } from "./styled";
import LeadItem from "./LeadItem";
import Pagination from "./Pagination";
import { v4 as uuidv4 } from "uuid";

const LeadForm = () => {
  const [leads, setLeads, addLead] = useContext(LeadContext)
  //const { addLead, postsPerPage, totalPosts } = leadContext;


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleUpdateFirstName = e => {
    setFirstName(e.target.value)
  }

  const handleUpdateLastName = e => {
    setLastName(e.target.value)
  }
  
  const handleUpdateEmail = e => {
    setEmail(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
      
    addLead(firstName, lastName, email)
    // https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument
    // https://stackoverflow.com/questions/53203864/react-functional-setstate-previous-state-different-from-new-updated-value
    // 1. copy the snapshot of the current state with spread operator
    // 2. add a new object to the state after the comma
    // returning a array because lead state is an array of objects e.g useState([{}])
    //setLeads(prevLeads => [...prevLeads, { firstName,lastName, email }] )


  }
  return (
    <Wrapper>
      <div className="container nt-5">
        <h1 className="text-primary-mb3">Form</h1>
        <Form onSubmit={handleOnSubmit}>
          <Label style={{ display: "block" }}>First Name</Label>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleUpdateFirstName}
            name="firstName"
          />
          <Label style={{ display: "block" }}>Last Name</Label>
          <Input
            type="text"
            value={lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={handleUpdateLastName}
          />
          <Label>Email</Label>
          <Input
            type="text"
            value={email}
            onChange={handleUpdateEmail}
            name="email"
            placeholder="Email"
          />
          <button>Create Lead</button>
        </Form>
        <LeadItem></LeadItem>
      </div>
      {/* <Pagination /> */}
    </Wrapper>
  );
};

export default LeadForm;
