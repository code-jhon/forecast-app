import React from 'react';
import { TemperatureProps } from '../../utils/interfaces';
import '../../styles/Temperature.scss';

const Temperature: React.FC<TemperatureProps> = ({ temperature, humidity, windSpeed, windDirection, uv }) => {
  return (
    <div className="temperature">
      <div className="temperature__item">
        <span className="temperature__value--current">{temperature}°</span>
      </div>
      <div className="temperature__item">
        <span className="temperature__value--uv">+/-{uv}</span>
      </div>
      <div className="temperature__item">
        <span className="temperature__value--humidity">{humidity}%</span>
      </div>
      <div className="temperature__item">
        <span className="temperature__value--wind">Wind:{windDirection} {windSpeed} km/h</span>
      </div>      
    </div>
  );
};
 
export default Temperature;
