import axios from 'axios';
import {
	FETCH_WEATHER,
	FETCH_WEATHER_FAIL
} from './types';

export const fetchWeather = (city, country) => async dispatch => {
	await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=425cc51d672da804213f13f0d30daf17`)
		.then(response => dispatch({ type: FETCH_WEATHER, payload: response.data }))
		.catch(err => dispatch({ type: FETCH_WEATHER_FAIL, payload: err}))
};

export const fetchCityList = () => async dispatch => {
	const response = await axios.get('city.list.json')
	
	dispatch({ type: 'FETCH_CITY', payload: response.data })
};
