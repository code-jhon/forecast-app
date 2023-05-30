import React, { createContext, useState } from 'react';
import { WeatherData, WeatherProviderInterface, WeatherForeCastResponse } from '../../utils/interfaces';
import { mockedData, mockedForecastData } from './mockedData';

interface WeatherGlobalStates {
  weatherData: WeatherData;
  forecastData: WeatherForeCastResponse;
}

const initialWeatherContextData: WeatherData = mockedData;
const initialForecastData: WeatherForeCastResponse = mockedForecastData;

export const WeatherContext = createContext<WeatherGlobalStates | null>(null);

export const WeatherProvider: React.FC<WeatherProviderInterface> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeatherContextData);
  const [forecastData, setForecastData] = useState<WeatherForeCastResponse>(initialForecastData);

  return (
    <WeatherContext.Provider value={{weatherData, forecastData}}>
      {children}
    </WeatherContext.Provider>
  );
};
