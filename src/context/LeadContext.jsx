import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const LeadContext = createContext()
// ich schwall jetzt hier ein comment bla bla
export const LeadProvider = props => {
  const [leads, setLeads] = useState([])
  
  // Fetch Leads from API and load them in state
  useEffect(  () => {
    const getLeads = () => axios.get('/api/leads');
    
    const setLeadState = async () => {
      try {
        const res = await getLeads()
        res.data.map(lead => setLeads(prevState => [...prevState, lead]))
      } catch (err) {
        console.error(err)
      }
    }
    setLeadState()
  },[])

   const addLead = async (lead) => {
    try {
      const body = {
        firstName: 'hi from react'
      }
      const res = await axios.post('api/leads', body);
      console.log(res);
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
