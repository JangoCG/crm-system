import React, { useContext, useEffect } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Pagination from './Pagination';
import { LeadContext } from '../../context/LeadContext';

const LeadItem = () => {
  const [currentPosts, setLeads] = useContext(LeadContext);
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
          {currentPosts.map(({ _id, firstName, lastName, email }) => (
            <tr key={_id}>
              <td key={_id + 1}>{_id}</td>
              <td key={_id + 2}>{firstName}</td>
              <td key={_id + 3}>{lastName}</td>
              <td key={_id + 4}>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeadItem;
