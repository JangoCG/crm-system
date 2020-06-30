import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const LeadContext = createContext()

export const LeadProvider = props => {
  const [leads, setLeads] = useState([
    {
      firstName: 'Urlich',
      lastName: 'Bühler',
      email: 'u.bühler@it-sec.com',
      id: '123'
    },
    {
      firstName: 'Markus',
      lastName: 'Göltenboth',
      email: 'm.göltenboth@erbsen.com',
      id: '234'
    }
  ])
  
  useEffect(  () => {
    // get leads and setState
    const getLeads = () => axios.get('http://localhost:5000');
    
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

  return (
    <LeadContext.Provider value={[leads, setLeads]}>
      {props.children}
    </LeadContext.Provider>
  )
}
