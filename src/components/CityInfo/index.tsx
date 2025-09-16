import {useState, useEffect, useContext} from 'react';
import { WeatherContext } from '../../services/Context/WeatherContext';

import loadingGif from '../../assets/ai-loader-opt.gif';
import "../../styles/CityInfo.scss";

// Backend API URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const CityInfo = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { location } = useContext<any>(WeatherContext);

  const [apiResponse, setApiResponse] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const requestResponse = async () => {
    setLoading(true);
    try {
      // Call secure backend API instead of OpenAI directly
      const response = await fetch(`${API_BASE_URL}/api/city-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data.response);
    } catch (e) {
      console.error('API error:', e);
      setApiResponse(e instanceof Error ? e.message : "Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    requestResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const content = loading ? (
    <div className="loading"> <img width="100%" src={loadingGif} alt="loading AI response" /></div>
  ):(
    <div className='fade-in'>
      <h4>{location} City</h4>
      { apiResponse }
      <h5>powered by <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">openai.com</a></h5>
    </div>
  );

  return content;
}

export default CityInfo;