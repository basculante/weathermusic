import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import WeatherForm from './WeatherForm';

class Weather extends React.Component {
	state = {
		metric: false
	}

	changeToMetric = () => {
		this.setState(() => ({
			metric: true
		}));
	}

	changeToFarenheit = () => {
		this.setState(() => ({
			metric: false
		}))
	}

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
		} else if (this.props.weather.success === true && this.state.metric === false) {
			return (
				<div className="ui centered grid">
				<h1 className="row" style={{ marginTop: '20px' }}>Weather Music</h1>
					<div>
						<div className="ui" style={{margin: '50px'}}>
							<p>{this.props.weather.tempFarenheit}F</p>
							<p><img src={`http://openweathermap.org/img/w/${this.props.weather.conditionIcon}.png`} alt="conditon-Icon" style={{ height:'100px', width:'100px'}}/></p>
							<p>{this.props.weather.condition}</p>
							<p>{this.props.weather.city}</p>
							<button onClick={this.changeToMetric} className="ui green button">Celcius</button>
						</div>
						<div className="row">
							<WeatherForm />
						</div>
					</div>
				</div>
			);
		} else if (this.props.weather.success === true && this.state.metric === true ) {
			return (
				<div className="ui centered grid">
				<h1 className="row" style={{ marginTop: '20px' }}>Weather Music</h1>
					<div>
						<div className="ui" style={{margin: '50px'}}>
							<p>{this.props.weather.tempCelsius}C</p>
							<p><img src={`http://openweathermap.org/img/w/${this.props.weather.conditionIcon}.png`} alt="conditon-Icon" style={{ height:'100px', width:'100px'}}/></p>
							<p>{this.props.weather.condition}</p>
							<p>{this.props.weather.city}</p>
							<button onClick={this.changeToFarenheit} className="ui green button">Farenheit</button>
						</div>
						<div className="row">
							<WeatherForm />
						</div>
					</div>
				</div>
			);
		}
	}
};

// const cityID = this.props.state.city.find(cityId => this.state.formValues.city && this.state.formValues.city === this.props.state.city.name && this.props.state.city.country)

const mapStateToProps = (state, ownProps) => {
	return { 
		weather: state.weather,
		}
}

export default connect(mapStateToProps, { fetchWeather})(Weather);