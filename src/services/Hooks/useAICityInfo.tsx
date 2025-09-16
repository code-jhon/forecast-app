import { useState, useCallback } from 'react';
import { getCityInformation, getMockCityInformation } from '../API/openai';

interface UseAICityInfoReturn {
  cityInfo: string;
  loading: boolean;
  error: string | null;
  fetchCityInfo: (city: string, useMock?: boolean) => Promise<void>;
  clearInfo: () => void;
}

export const useAICityInfo = (): UseAICityInfoReturn => {
  const [cityInfo, setCityInfo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCityInfo = useCallback(async (city: string, useMock: boolean = true) => {
    if (!city.trim()) {
      setError('Please provide a city name');
      return;
    }

    setLoading(true);
    setError(null);
    setCityInfo('');

    try {
      const response = useMock 
        ? await getMockCityInformation({ city })
        : await getCityInformation({ city });

      if (response.error) {
        setError(response.error);
      } else {
        setCityInfo(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const clearInfo = useCallback(() => {
    setCityInfo('');
    setError(null);
  }, []);

  return {
    cityInfo,
    loading,
    error,
    fetchCityInfo,
    clearInfo
  };
};