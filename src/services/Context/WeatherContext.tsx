import React, { useState, createContext } from 'react';
import { WeatherHookResult, WeatherProviderInterface, WeatherGlobalStates } from '../../utils/interfaces';
import useWeatherApi from '../Hooks/useWeatherApi';

export const WeatherContext = createContext<WeatherGlobalStates | null>(null);

export const WeatherProvider: React.FC<WeatherProviderInterface> = ({ children }) => {
  const [location, setLocation] = useState<string>('London');
  const data: WeatherHookResult = useWeatherApi(location);

  return (
    <WeatherContext.Provider value={{ data, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
