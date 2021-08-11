import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchWeather = async (q) => {
  const { data } = await axios.get(URL, {
    params: {
      q,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
}