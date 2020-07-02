import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const LeadContext = createContext()
// ich schwall jetzt hier ein comment bla bla
export const LeadProvider = props => {
  const [leads, setLeads] = useState([])

  // Fetch Leads from API and load them in state
    const getleads = () => axios.get('/api/leads');

    const setLeadState = async () => {
      try {
        setLeads([])
        const res = await getleads()
        console.log(res)
        res.data.map(lead => setLeads(prevstate => [...prevstate, lead]))
      } catch (err) {
        console.error(err)
      }
    }
   useEffect(  () => {
     setLeadState()
  },[])

  // addLead function is defined in the context and passed to rest
  // of the application through the provider
   const addLead = async (firstName, lastName, email) => {
    try {
      const body = {
        firstName,
        lastName,
        email
      }
      const res = await axios.post('api/leads', body);
      //setLeads([])
      setLeadState()
    } catch (err) {
      console.error(err);
    }
  };

return (
    <LeadContext.Provider value={[leads, setLeads, addLead]}>
      {props.children}
    </LeadContext.Provider>
  )
}
