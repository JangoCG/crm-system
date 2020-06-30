// All actions and states will be here
// e.g. fetching data etc
import React, { useReducer, useState, useEffect } from 'react';
import LeadContext from './leadContext';
import LeadReducer from './leadReducer';
import { ADD_LEAD, GET_LEADS } from '../types';

import axios from 'axios';
const LeadState = (props) => {
  const initialState = {};
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useReducer(LeadReducer, posts);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // pull out state a/localhost:5000nd dispatch from the useReducer Hoo

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Get Leads

  const getLeads = async () => {
    try {
      const res = await axios.get('http://localhost:5000');
      console.log('res antwort vom server');
      console.log(res);
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Add Lead
  const addLead = async (lead) => {
    try {
      const res = await axios.post('http://localhost:5000/addLead');
      console.log(res);
      //    dispatch({ type: ADD_LEAD, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <LeadContext.Provider
      //   Here we provide the data of the state to the whole application
      value={{
        addLead,
        getLeads,
        postsPerPage,
        totalPosts: posts.length,
        paginate,
        posts: currentPosts
      }}
    >
      {/* Props.children displays whatever is included between the opening and closing Tag of LeadContext.Provider */}
      {/* In this case the whole Application will e wrapped inside the provider(LeadState), so thats how the application is displayed */}
      {props.children}
    </LeadContext.Provider>
  );
};

// LeadState will be the provider in which the whole application is wrapped
export default LeadState;
