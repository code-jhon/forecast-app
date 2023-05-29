import React from 'react';
import '../../styles/Temperature.scss';

interface TemperatureProps {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const Temperature: React.FC<TemperatureProps> = ({ temperature, humidity, windSpeed }) => {
  return (
    <div className="temperature">
      <div className="temperature__item">
        <span className="temperature__label">Temperature:</span>
        <span className="temperature__value">{temperature}°C</span>
      </div>
      <div className="temperature__item">
        <span className="temperature__label">Humidity:</span>
        <span className="temperature__value">{humidity}%</span>
      </div>
      <div className="temperature__item">
        <span className="temperature__label">Wind Speed:</span>
        <span className="temperature__value">{windSpeed} km/h</span>
      </div>
    </div>
  );
};

export default Temperature;
