import React from 'react';
import { TemperatureProps } from '../../utils/interfaces';
import '../../styles/Temperature.scss';

const Temperature: React.FC<TemperatureProps> = ({ temperature, humidity, windSpeed, windDirection, uv }) => {
  return (
    <div className="temperature">
      <div className="temperature__item">
        <div className="temperature__label">Temperature</div>
        <span className="temperature__value temperature__value--current">{temperature}°</span>
      </div>
      <div className="temperature__item">
        <div className="temperature__label">UV Index</div>
        <span className="temperature__value temperature__value--uv">{uv}</span>
      </div>
      <div className="temperature__item">
        <div className="temperature__label">Humidity</div>
        <span className="temperature__value temperature__value--humidity">{humidity}%</span>
      </div>
      <div className="temperature__item">
        <div className="temperature__label">Wind</div>
        <span className="temperature__value temperature__value--wind">{windDirection} {windSpeed} km/h</span>
      </div>      
    </div>
  );
};
 
export default Temperature;
