import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=425cc51d672da804213f13f0d30daf17'
})