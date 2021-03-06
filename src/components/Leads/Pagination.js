import React, { useContext } from 'react';
import { LeadContext } from '../../context/LeadContext';
const Pagination = () => {
  const [postsPerPage, totalPosts, paginate] = useContext(LeadContext);
  // Calculate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {/* Ich rufe hier die Paginate Funktion vom Parent auf und
            gebe Number mit */}
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
