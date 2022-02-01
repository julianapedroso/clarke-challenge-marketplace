import React from 'react';
import './styles.scss';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <main className="Pagination">
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className="btn__page"
            style={
              index === currentPage
                ? { border: '2px solid #21DF86' }
                : { border: '2px solid #FAF5F5' }
            }
            value={index}
            onClick={(event) => setCurrentPage(Number(event.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </main>
  );
};

export default Pagination;
