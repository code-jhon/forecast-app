import React, { useContext } from 'react';

import Search from '../../components/Search';
import Temperature from '../../components/Temperature';

import { WeatherContext } from '../../services/Context/WeatherContext';

import OtherInfo from '../../components/OtherInfo';
import AverageHumidity from '../../components/AverageHumidity';

import '../../styles/SideBar.scss';

const SideBar: React.FC = () => {
  const { weatherData, forecastData } = useContext<any>(WeatherContext);
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
        <OtherInfo probability={20} />
      </div>
      <div className="sidebar__inner-component">
        <AverageHumidity data={forecastData}/>
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the third inner component */}
      </div>
    </div>
  );
};

export default SideBar;
