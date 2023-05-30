import { useState, useEffect } from 'react';
import { getWeatherData } from '../../services/API/weather';
import { WeatherData, ErrorResponse, WeatherHookResult } from '../interfaces';

const useWeatherData = (location: string): WeatherHookResult => {
  const [weatherData, setWeatherData] = useState<WeatherData | ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      try {
        const data: WeatherData | ErrorResponse = await getWeatherData(location);
        setWeatherData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  return { weatherData, loading, error };
};

export default useWeatherData;
