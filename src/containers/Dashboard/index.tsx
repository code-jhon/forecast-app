import React, { useContext, useState } from 'react';
import '../../styles/Dashboard.scss';
import Content from '../Content';
import Search from '../../components/Search';
import Temperature from '../../components/Temperature';
import CityInfo from '../../components/CityInfo';
import AICityInfo from '../../components/AICityInfo';
import ExtendedForecast from '../../components/ExtendedForecast';
import { WeatherContext } from '../../services/Context/WeatherContext';

const Dashboard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useContext<any>(WeatherContext);
  const [showExtendedForecast, setShowExtendedForecast] = useState(false);
  

  return (
    <div className="main-container wallpaper__cloudly">
      <div className="header-area">
        <Content />
        <div className="search-container">
          <Search />
        </div>
      </div>
      <div className="main-content-area">
        <div className="weather-summary">
          <div className="current-weather-container">
            {!data.loading ? (
              <>
                <Temperature
                  temperature={data.weatherData?.current.temp_c}
                  humidity={data.weatherData?.current.humidity}
                  windSpeed={data.weatherData?.current.wind_kph}
                  windDirection={data.weatherData?.current.wind_dir}
                  uv={data.weatherData?.current.uv}
                />
                <div className="future-features">
                  <div 
                    className="feature-card feature-card--clickable"
                    onClick={() => setShowExtendedForecast(true)}
                  >
                    <h4 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '14px' }}>Extended Forecast</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', fontSize: '12px', margin: 0 }}>
                      7-day predictions
                    </p>
                  </div>
                  <div className="feature-card">
                    <h4 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '14px' }}>Weather Maps</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', fontSize: '12px', margin: 0 }}>
                      Radar imagery
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="loading-placeholder">
                <h3 style={{ color: 'white', textAlign: 'center' }}>Loading weather data...</h3>
              </div>
            )}
          </div>
        </div>
        <div className="ai-city-info">
          <AICityInfo />
        </div>
      </div>
      <div className="footer-area">
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Last updated: {new Date().toLocaleTimeString()}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
          Forecast App v2.0
        </div>
      </div>
      
      {/* Extended Forecast Bottom Panel */}
      <div className={`forecast-panel ${showExtendedForecast ? 'forecast-panel--open' : ''}`}>
        <div className="forecast-panel-header">
          <div className="panel-handle"></div>
          <button 
            className="panel-close"
            onClick={() => setShowExtendedForecast(false)}
          >
            ×
          </button>
        </div>
        <div className="forecast-panel-content">
          {!data.loading && data.weatherData?.forecast?.forecastday ? (
            <ExtendedForecast forecastData={data.weatherData.forecast.forecastday} />
          ) : (
            <div className="loading-placeholder">
              <h3 style={{ color: 'white', textAlign: 'center' }}>Loading forecast data...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
