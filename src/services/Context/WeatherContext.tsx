import React, { createContext, useState } from 'react';
import { WeatherData, WeatherProviderInterface } from '../../utils/interfaces';
import { mockedData } from './mockedData';

const initialWeatherContextData: WeatherData = mockedData;

export const WeatherContext = createContext<WeatherData>(initialWeatherContextData);

export const WeatherProvider: React.FC<WeatherProviderInterface> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeatherContextData);

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};
