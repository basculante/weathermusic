import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import WeatherForm from './WeatherForm';

class Weather extends React.Component {
	render () {
		if (this.props.weather.success === null) {
			return (
				<div className="ui centered grid" style={{ margin: 'auto'}}>
				<h1 className="row">Weather Music</h1>
					<WeatherForm />
				</div>
			);
		} else if (this.props.weather.success === false) {
			alert("Could not find city.")
			return (
				<div className="ui centered grid" style={{ margin: 'auto'}}>
				<h1 className="row">Weather Music</h1>
					<WeatherForm />
				</div>
			);
		}
		return (
			<div className="ui centered grid">
			<h1 className="row" style={{ marginTop: '20px' }}>Weather Music</h1>
				<div>
					<div className="ui segment" style={{margin: '50px'}}>
						<p>{this.props.weather.tempCelsius}C</p>
						<p>{this.props.weather.tempFarenheit}F</p>
						<p><img src={`http://openweathermap.org/img/w/${this.props.weather.conditionIcon}.png`} alt="conditon-Icon" style={{ height:'100px', width:'100px'}}/></p>
						<p>{this.props.weather.condition}</p>
						<p>{this.props.weather.city}</p>
					</div>
					<div className="row">
						<WeatherForm />
					</div>
				</div>
			</div>
		);
	}
};

// const cityID = this.props.state.city.find(cityId => this.state.formValues.city && this.state.formValues.city === this.props.state.city.name && this.props.state.city.country)

const mapStateToProps = (state, ownProps) => {
	return { 
		weather: state.weather,
		}
}

export default connect(mapStateToProps, { fetchWeather})(Weather);