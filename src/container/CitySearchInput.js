import React from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/actions";
import WeatherService from "../service/WeatherService";
import CitySearchInput from '../components/CitySearchInput';


export default () => {
  const dispatch = useDispatch();

  function handleSelect(e) {
    const selectedCity = e.target.dataset.value;
    WeatherService.getWeatherInfo(selectedCity).then(result => {
      dispatch(addCity(result.data));
    });
  }

  return (
    <CitySearchInput handleSelect={handleSelect} />
  );
};
