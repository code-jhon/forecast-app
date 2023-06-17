import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { FaSearch } from 'react-icons/fa';
import '../../styles/Search.scss';

const Search: React.FC = () => {
  return (
    <div className="search-input">
      <Autocomplete
        apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        style={{ 
          padding: '8px',
          borderBottom: '1px solid #fff',
          outline: 'none',
          backgroundColor: 'transparent',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          fontFamily: "'Falling Sky', sans-serif",
         }}
      />
      <FaSearch className="search-input__icon" />
    </div>
  );
};

export default Search;