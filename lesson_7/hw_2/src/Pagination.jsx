import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    
    const isPrevPageAvaible = currentPage === 0;
    const isNextPageAvaible = currentPage === Math.ceil(totalItems / itemsPerPage) - 1;

return(
    <div class="pagination">
    <button class="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
    {isPrevPageAvaible ? "" : "←"}</button>
    <span class="pagination__page">{currentPage + 1}</span>
    <button class="btn" onClick={goNext} disabled={isNextPageAvaible}>
    {isNextPageAvaible ? "" : "→"}</button>
  </div>
)

};

export default Pagination;