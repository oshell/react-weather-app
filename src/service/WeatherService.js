import axios from 'axios';

const cityPlaceHolder = '###CITY###';
const appid = '66fa03082406550db1285f333ad176c4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityPlaceHolder}&appid=${appid}&units=metric`;

class WeatherService {
  getWeatherInfo(city) {
    const requestUrl = apiUrl.replace(cityPlaceHolder, city);
    return axios.get(requestUrl);
  }
}

export default new WeatherService();