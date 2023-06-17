import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { WeatherData, ErrorResponse } from '../../utils/interfaces';

const API_KEY: string | undefined = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const getWeatherData = async (location: string): Promise<WeatherData | ErrorResponse> => {
  try {
    const response: AxiosResponse<WeatherData> = await api.get('/forecast.json', {
      params: {
        q: location,
        days: 1,
        aqi: "yes",
        alerts: "yes"
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.error('Error retrieving weather data:', error);
    throw error;
  }
};
