import React, { useContext } from 'react';

import Search from '../../components/Search';
import Temperature from '../../components/Temperature';

import { WeatherContext } from '../../services/Context/WeatherContext';

import UvIndicator from '../../components/UvIndicator';
import DayTemperatureChart from '../../components/DayTemperatureChart';

import '../../styles/SideBar.scss';

const SideBar: React.FC = () => {
  const { data } = useContext<any>(WeatherContext);
  const content = !data.loading ? (
    <div className="sidebar">
      <div className="sidebar__inner-component">
        <Search />
      </div>
      <div className="sidebar__inner-component">
        <Temperature
          temperature={data.weatherData?.current.temp_c}
          humidity={data.weatherData?.current.humidity}
          windSpeed={data.weatherData?.current.wind_kph}
          windDirection={data.weatherData?.current.wind_dir}
          uv={data.weatherData?.current.uv}
        />
      </div>
      <div className="sidebar__inner-component">
        <UvIndicator probability={data.weatherData?.current.uv} />
      </div>
      <div className="sidebar__inner-component">
        <DayTemperatureChart forecastDay={data.weatherData.forecast.forecastday}/>
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the third inner component */}
      </div>
    </div>
  ) : (
    <>loading</>
  );

  return content;
};

export default SideBar;
