import { useState, useEffect, useMemo } from 'react';
import { ErrorResponse, WeatherHookResult } from '../../utils/interfaces';
import { mockedData } from '../Context/mockedData';
import { getWeatherData } from '../API/weather';

const useWeatherApi = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherHookResult>({
    weatherData: mockedData,
    loading: true,
    error: null,
  });

  const fetchData = useMemo(
    () => async () => {
      try {
        const weatherData = await getWeatherData(location);
        setWeatherData({
          weatherData: weatherData,
          loading: false,
          error: null,
        });
      } catch (error) {
        setWeatherData({
          weatherData: null,
          loading: false,
          error: error as ErrorResponse,
        });
      }
    }, 
    [location]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return weatherData;
};

export default useWeatherApi;
