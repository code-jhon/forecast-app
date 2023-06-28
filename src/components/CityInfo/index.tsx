import {useState, useEffect, useContext} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { WeatherContext } from '../../services/Context/WeatherContext';

const openaiKey = import.meta.env.VITE_OPEN_AI_KEY;

const CityInfo = () => {
  const configuration = new Configuration({
    apiKey: openaiKey,
  });

  //call weatherData from context
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useContext<any>(WeatherContext);

  const city = `${ data.weatherData?.location?.name }, ${ data.weatherData?.location?.country }`;

  const promptParam = `show a 100 chars text about the following city ${ city } highlight the best from the city`;

  const openai = new OpenAIApi(configuration);
  const [prompt] = useState(promptParam);
  const [apiResponse, setApiResponse] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const requestResponse = async () => {
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    requestResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = loading ? (
    <div className="loading"> Loading... </div>
  ):(
    <div>
      { apiResponse }
    </div>
  );

  return content;
}

export default CityInfo;