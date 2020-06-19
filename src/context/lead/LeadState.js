// All actions and states will be here
// e.g. fetching data etc
import React, { useReducer } from 'react'
import LeadContext from './leadContext'
import LeadReducer from './leadReducer'
import { TEST_TYPE } from '../types'

const LeadState = props => {
  const initialState = {
    firstName: 'ulrich',
    lastName: 'bühler',
    email: 'u.bühler@itsec.com'
  }

  // pull out state and dispatch from the useReducer Hook
  const [state, dispatch] = useReducer(LeadReducer, initialState)

  // Add Lead

  // Delete Lead

  return (
    <LeadContext.Provider
      //   Here we provide the data of the state to the whole application
      value={{
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email
      }}
    >
      {/* Props.children displays whatever is included between the opening and closing Tag of LeadContext.Provider */}
      {/* In this case the whole Application will be wrapped inside the provider(LeadState), so thats how the application is displayed */}
      {props.children}
    </LeadContext.Provider>
  )
}

// LeadState will be the provider in which the whole application is wrapped
export default LeadState
