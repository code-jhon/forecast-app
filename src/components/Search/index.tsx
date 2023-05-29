import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/Search.scss';

const Search: React.FC = () => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Type your city"
        className="search-input__field"
      />
      <FaSearch className="search-input__icon" />
    </div>
  );
};

export default Search;