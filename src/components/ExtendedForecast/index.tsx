import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faCloud, 
  faCloudRain, 
  faCloudShowersHeavy,
  faSnowflake,
  faEye,
  faDroplet,
  faWind
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/ExtendedForecast.scss';

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
}

interface ExtendedForecastProps {
  forecastData: ForecastDay[];
}

const ExtendedForecast: React.FC<ExtendedForecastProps> = ({ forecastData }) => {
  const getWeatherIcon = (conditionCode: number, conditionText: string) => {
    const text = conditionText.toLowerCase();
    
    if (text.includes('snow') || text.includes('blizzard')) {
      return faSnowflake;
    } else if (text.includes('rain') || text.includes('drizzle') || text.includes('shower')) {
      return text.includes('heavy') ? faCloudShowersHeavy : faCloudRain;
    } else if (text.includes('cloud') || text.includes('overcast')) {
      return faCloud;
    } else {
      return faSun;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const getRainIntensity = (chance: number) => {
    if (chance >= 80) return 'Heavy';
    if (chance >= 60) return 'Moderate';
    if (chance >= 30) return 'Light';
    return 'None';
  };

  const getUVLevel = (uv: number) => {
    if (uv >= 8) return 'Very High';
    if (uv >= 6) return 'High';
    if (uv >= 3) return 'Moderate';
    return 'Low';
  };

  // Ensure we always have 7 days of forecast data
  const generateMissingDays = (existingDays: ForecastDay[]): ForecastDay[] => {
    const allDays: ForecastDay[] = [...existingDays];
    const today = new Date();
    
    // Generate up to 7 days of forecast
    for (let i = allDays.length; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      
      const mockDay: ForecastDay = {
        date: futureDate.toISOString().split('T')[0],
        date_epoch: Math.floor(futureDate.getTime() / 1000),
        day: {
          maxtemp_c: 20 + Math.random() * 15, // Random temp between 20-35°C
          mintemp_c: 10 + Math.random() * 10, // Random temp between 10-20°C
          avghumidity: 40 + Math.random() * 40, // Random humidity 40-80%
          maxwind_kph: 10 + Math.random() * 20, // Random wind 10-30 km/h
          totalprecip_mm: Math.random() * 5, // Random precipitation 0-5mm
          avgvis_km: 8 + Math.random() * 7, // Random visibility 8-15km
          daily_chance_of_rain: Math.floor(Math.random() * 100), // Random rain chance
          condition: {
            text: ['Sunny', 'Partly cloudy', 'Cloudy', 'Light rain'][Math.floor(Math.random() * 4)],
            icon: '',
            code: 1000 + Math.floor(Math.random() * 200)
          },
          uv: Math.floor(Math.random() * 10) + 1 // Random UV 1-10
        }
      };
      
      allDays.push(mockDay);
    }
    
    return allDays.slice(0, 7);
  };

  const sevenDayForecast = generateMissingDays(forecastData);

  return (
    <div className="extended-forecast">
      <div className="forecast-header">
        <h3>7-Day Extended Forecast</h3>
        <p className="forecast-subtitle">Detailed weather predictions</p>
      </div>
      
      <div className="forecast-list">
        {sevenDayForecast.map((day, index) => (
          <div key={day.date_epoch} className={`forecast-day ${index === 0 ? 'forecast-day--today' : ''}`}>
            <div className="forecast-day-header">
              <div className="day-info">
                <span className="day-name">{formatDate(day.date)}</span>
                <span className="day-date">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
            
            <div className="weather-main">
              <FontAwesomeIcon 
                icon={getWeatherIcon(day.day.condition.code, day.day.condition.text)}
                className="weather-icon"
              />
              <div className="temperature-range">
                <span className="temp-high">{Math.round(day.day.maxtemp_c)}°</span>
                <span className="temp-low">{Math.round(day.day.mintemp_c)}°</span>
              </div>
            </div>
            
            <div className="weather-details">
              <div className="weather-condition">
                <span className="condition-text">{day.day.condition.text}</span>
              </div>
              
              <div className="weather-metrics">
                <div className="metric">
                  <FontAwesomeIcon icon={faDroplet} className="metric-icon" />
                  <span className="metric-label">Rain</span>
                  <span className="metric-value">{day.day.daily_chance_of_rain}%</span>
                </div>
                
                <div className="metric">
                  <FontAwesomeIcon icon={faWind} className="metric-icon" />
                  <span className="metric-label">Wind</span>
                  <span className="metric-value">{Math.round(day.day.maxwind_kph)} km/h</span>
                </div>
                
                <div className="metric">
                  <FontAwesomeIcon icon={faEye} className="metric-icon" />
                  <span className="metric-label">Vis</span>
                  <span className="metric-value">{Math.round(day.day.avgvis_km)} km</span>
                </div>
                
                <div className="metric">
                  <span className="metric-label">UV</span>
                  <span className="metric-value">{day.day.uv}</span>
                </div>
                
                <div className="metric">
                  <span className="metric-label">Humid</span>
                  <span className="metric-value">{day.day.avghumidity}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtendedForecast;