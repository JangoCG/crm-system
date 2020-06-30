import React, { useContext, useEffect } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Pagination from './Pagination';
import { LeadContext } from '../../context/LeadContext';

const LeadItem = () => {
  const [leads, setLeads] = useContext(LeadContext);
  //const { leads, posts, getLeads } = leadContext;

  return (
    <>
      <table style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((post, index) => (
            <tr key={index}>
              <td key={index + 1}>{post.id}</td>
              <td key={index + 2}>{post.firstName}</td>
              <td key={index + 3}>{post.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeadItem;
