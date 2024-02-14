
import React from 'react';

import './searchAndSort.css';
const Nav = ({ handleInputChange, handleSortChange, query }) => {
  return (
    <nav>
      <div className="search-box-container">
        <input
          className="text search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter the vendor to search."
        />
        <select className="sort-dropdown" onChange={handleSortChange}>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="experience">Years of Experience</option>
          <option value="AcceptedRequests">Accepted Requests</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;
