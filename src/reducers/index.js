import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from './weatherReducer';
import cityReducer from './cityReducer';

export default combineReducers({
	weather: weatherReducer,
	form: formReducer,
	city: cityReducer
});