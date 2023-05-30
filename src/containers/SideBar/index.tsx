import React, { useContext } from 'react';
import Search from '../../components/Search';
import '../../styles/SideBar.scss';
import Temperature from '../../components/Temperature';
import { WeatherContext } from '../../services/Context/WeatherContext';

const SideBar: React.FC = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="sidebar">
      <div className="sidebar__inner-component">
        <Search />
      </div>
      <div className="sidebar__inner-component">
        <Temperature
          temperature={2}
          humidity={2}
          windSpeed={2}
         />
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the third inner component */}
      </div>
    </div>
  );
};

export default SideBar;
