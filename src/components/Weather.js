import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import WeatherForm from './WeatherForm';
import { Grid, Button } from 'semantic-ui-react';
import './Weather.css';

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
				<div>
					<div className="video-container">
			          <video id="background-video-intro" loop autoPlay muted>
			            <source src={require('./backgrounds/intro-page.mp4')} type="video/mp4"/>
			          </video>
				    </div>
				    <div className="intro-weatherform">
							<WeatherForm />
					</div>
				</div>
			);
		} else if (this.props.weather.success === false) {
			alert("Could not find city.")
			return (
				<div className="weather-display">
					<div className="video-container">
		          		<video id="background-video-intro" loop autoPlay muted>
		            		<source src={require('./backgrounds/intro-page.mp4')} type="video/mp4"/>
		          		</video>
			    	</div>
				<Grid>
					<Grid.Row>
						<WeatherForm />
					</Grid.Row>
				</Grid>
				</div>
			);
		} else if (this.props.weather.success === true && this.state.metric === false) {
			return (
				<div>
					<Grid>
						<div className="weather-display">
							<Grid.Row centered>
								<p className="temperature">{this.props.weather.tempFarenheit}&deg;F</p>
								<p className="condition">{this.props.weather.condition}</p>
								<p className="city">{this.props.weather.city}</p>
								<Button className="temp-button" onClick={this.changeToMetric} style={{marginTop:'2vh', marginBottom: '2vh'}}>Celcius</Button>
							</Grid.Row>
							<Grid.Row>
								<WeatherForm />
							</Grid.Row>
						</div>
					</Grid>
				</div>
			);
		} else if (this.props.weather.success === true && this.state.metric === true ) {
			return (
				<div>
					<Grid>
						<div className="weather-display">
							<Grid.Row centered>
								<p className="temperature">{this.props.weather.tempCelsius}&deg;C</p>
								<p className="condition">{this.props.weather.condition}</p>
								<p className="city">{this.props.weather.city}</p>
								<Button className="temp-button" onClick={this.changeToFarenheit} style={{marginTop:'2vh', marginBottom: '2vh'}}>Farenheit</Button>
							</Grid.Row>
							<Grid.Row>
								<WeatherForm />
							</Grid.Row>
						</div>
					</Grid>
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