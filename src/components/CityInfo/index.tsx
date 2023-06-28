import {useState, useEffect, useContext} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { WeatherContext } from '../../services/Context/WeatherContext';

import loadingGif from '../../assets/ai-loader-opt.gif';
import "../../styles/CityInfo.scss";


const openaiKey = import.meta.env.VITE_OPEN_AI_KEY;
const configuration = new Configuration({
    apiKey: openaiKey,
  });

const CityInfo = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { location } = useContext<any>(WeatherContext);

  const openai = new OpenAIApi(configuration);
  delete configuration.baseOptions.headers['User-Agent'];

  const [apiResponse, setApiResponse] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const requestResponse = async () => {
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `show short text about the following city ${ location } highlight the best from the city, limit to 40 words`,
        temperature: 0.5,
        max_tokens: 4000,
      });
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      setApiResponse("Something is going wrong, Please try again.");
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