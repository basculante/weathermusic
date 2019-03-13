import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import './Weather.css';

class Spotify extends React.Component {
	render () {

	const conditionIcon = this.props.weather.conditionIcon
	const temp = this.props.weather.tempFarenheit

	if ( conditionIcon === '09d' || conditionIcon === '09n' || conditionIcon === '10d' || conditionIcon === '10n' || conditionIcon === '11d'
		 || conditionIcon === '11n') {
			return (
				<div className="rain">
					<div className="video-container">
			          <video id="background-video-rain" loop autoPlay muted>
			            <source src={require('./backgrounds/rain.mp4')} type="video/mp4"/>
			          </video>
				    </div>
					<Grid columns={1}>
						<Grid.Column> 
						<div className="spotify-container">
						<iframe className="spotify-iframe" title="rain" src="https://open.spotify.com/embed/playlist/2NyQKPgxZROmEkKfBpZOFM" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
						</div>
						</Grid.Column>
					</Grid>
				</div>
			);
		} 	

	else if ((conditionIcon === '01d' || conditionIcon === '01n' || conditionIcon === '02d' || conditionIcon === '02n' || conditionIcon === '03d' || conditionIcon === '03n') && (temp <= '55')) {
			return (
				<div className="cold">
					<div>
						<div className="video-container">
							<div>
					          <video id="background-video-cold" loop autoPlay muted>
					            <source src={require('./backgrounds/cold.mp4')} type="video/mp4"/>
					          </video>
					        </div>
					    </div>
						<Grid>
						<Grid.Column>
						<div className="spotify-container">
							<iframe className="spotify-iframe" title="cold" src="https://open.spotify.com/embed/playlist/5TF7jdNbCkrEcPRE34OquD" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
						</div>
						</Grid.Column>
						</Grid>
					</div>
				</div>
			);
		}

	else if ((conditionIcon === '01d' || conditionIcon === '01n' || conditionIcon === '02d' || conditionIcon === '02n' || conditionIcon === '03d' || conditionIcon === '03n') && (temp <= '70')) {
			return (
				<div className="spring">
					<div>
						<div className="video-container">
							<div>
								<div>
						          <video id="background-video-spring" loop autoPlay muted>
						            <source src={require('./backgrounds/spring.mp4')} type="video/mp4"/>
						          </video>
						        </div>
						    </div>
					    </div>
						<Grid>
						<Grid.Column>
						<div className="spotify-container">
							<iframe className="spotify-iframe" title="spring" src="https://open.spotify.com/embed/playlist/2D1YDwXoR8g48EmGtApm3f" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
						</div>
						</Grid.Column>
						</Grid>
					</div>
				</div>
			);
		}

	else if ((conditionIcon === '01d' || conditionIcon === '01n' || conditionIcon === '02d' || conditionIcon === '02n' || conditionIcon === '03d' || conditionIcon === '03n') && (temp >= '70')) {
			return (
				<div className="sunny">
					<div>
						<div className="video-container">
				          <video id="background-video-sunny" loop autoPlay muted>
				            <source src={require('./backgrounds/sunny.mp4')} type="video/mp4"/>
				          </video>
					    </div>
						<Grid>
						<Grid.Column>
						<div className="spotify-container">
							<iframe className="spotify-iframe" title="sunny" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX1UA045EoPG" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
						</div>
						</Grid.Column>
						</Grid>
					</div>
				</div>
			);
		}

	else if ( conditionIcon === '13d' || conditionIcon === '13n') {
			return (
				<div className="snow">
						<div className="video-container">
				          <video id="background-video-snow" loop autoPlay muted>
				            <source src={require('./backgrounds/snow.mp4')} type="video/mp4"/>
				          </video>
					    </div>
					<Grid>
					<Grid.Column>
					<div className="spotify-container">
						<iframe className="spotify-iframe" title="snow" src="https://open.spotify.com/embed/playlist/5lAO7e3ZkEb3MKo3ZgZy6F" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
					</div>
					</Grid.Column>
					</Grid>
				</div>
			);
		}

	else if ( conditionIcon === '50d' || conditionIcon === '50n' || conditionIcon === '04d' || conditionIcon ==='04n' ) {
			return (
				<div className="cloudy">
					<div>
						<div>
							<div className="video-container">
								<div>
									<div>
						          <video id="background-video-cloudy" loop autoPlay muted>
						            <source src={require('./backgrounds/cloudy.mp4')} type="video/mp4"/>
						          </video>
						          	</div>
						        </div>
						    </div>
							<Grid>
							<Grid.Column>
							<div className="spotify-container">
								<iframe className="spotify-iframe" title="cloudy" src="https://open.spotify.com/embed/playlist/6ch64c7EaRQPcQ1rgO5w9H" width="560" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
							</div>
							</Grid.Column>
							</Grid>
						</div>
					</div>
				</div>
			);
		}
	
	return null;
	}
}

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(Spotify);

