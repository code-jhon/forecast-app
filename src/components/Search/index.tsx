import React, { useContext } from "react";
import { WeatherGlobalStates } from "../../utils/interfaces";
import { WeatherContext } from "../../services/Context/WeatherContext";

import Autocomplete from "react-google-autocomplete";

import { FaSearch } from "react-icons/fa";
import "../../styles/Search.scss";


const Search: React.FC = () => {
  const { setLocation } = useContext<any>(WeatherContext);
  return (
    <div className="search-input">
      <Autocomplete
        apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          setLocation(place.address_components[0].short_name);
        }}
        style={{
          padding: "8px",
          borderBottom: "1px solid #fff",
          outline: "none",
          backgroundColor: "transparent",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          fontFamily: "'Falling Sky', sans-serif",
          width: "100%",
        }}
      />
      <FaSearch className="search-input__icon" />
    </div>
  );
};

export default Search;
