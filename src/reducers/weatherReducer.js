import { FETCH_WEATHER, FETCH_WEATHER_FAIL } from '../actions/types';

const INITIAL_STATE = {
	tempCelsius: null,
	tempFarenheit: null,
	condition: null,
	conditionIcon: null,
	city: null,
	success: null,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_WEATHER:
			return {
				...state,
				tempCelsius: Math.floor(action.payload.main.temp - 273.15),
				tempFarenheit: Math.floor((9 / 5) * (action.payload.main.temp - 273) + 32),
				condition: action.payload.weather[0].main,
				conditionIcon: action.payload.weather[0].icon,
				city: action.payload.name,
				success: true
			}
		case FETCH_WEATHER_FAIL:
			return {
				...state, success: false
			}
		default:
			return state;
	}
};