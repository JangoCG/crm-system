import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const LeadContext = createContext()
// ich schwall jetzt hier ein comment bla bla
export const LeadProvider = props => {
  const [leads, setLeads] = useState([])

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = leads.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fetch Leads from API and load them in state
    const getleads = () => axios.get('/api/leads');

    const setLeadState = async () => {
      try {
        setLeads([])
        const res = await getleads()
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

  const totalPosts = leads.length
return (
    <LeadContext.Provider value={[
      currentPosts,
      setLeads,
      addLead,
      postsPerPage,
      totalPosts,
      paginate
      ]}>
      {props.children}
    </LeadContext.Provider>
  )
}
