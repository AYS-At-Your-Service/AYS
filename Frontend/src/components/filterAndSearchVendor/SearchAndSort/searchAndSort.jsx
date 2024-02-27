// Nav.jsx
import React from 'react';
import searchCss from './searchAndSort.module.css';
import { NAV_CONSTANTS } from './SearchConstants.js';

const Nav = ({ handleInputChange, handleSortChange, query }) => {
  return (
    <nav>
      <div className={searchCss["search-box-container"]}>
        <input
          className={searchCss["search-input"]}
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder={NAV_CONSTANTS.SEARCH_PLACEHOLDER}
        />
        <select className={searchCss["sort-dropdown"]} onChange={handleSortChange}>
          {NAV_CONSTANTS.SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Nav;
