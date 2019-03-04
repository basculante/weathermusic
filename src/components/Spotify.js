import React from 'react';
import { connect } from 'react-redux';

class Spotify extends React.Component {
	render () {

	const conditionIcon = this.props.weather.conditionIcon

	if ( conditionIcon === '09d' || conditionIcon === '09n' || conditionIcon === '10d' || conditionIcon === '10n' || conditionIcon === '11d'
		 || conditionIcon === '11n') {
			return (
				<div className="rain">
					<div className="ui centered grid">
						<iframe title="rain" src="https://open.spotify.com/embed/playlist/2NyQKPgxZROmEkKfBpZOFM" width="600" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: '30px'}}></iframe>
					</div>
				</div>
			);
		} 	

	else if ( conditionIcon === '01d' || conditionIcon === '01n' || conditionIcon === '02d' || conditionIcon === '02n' || conditionIcon === '03d' || conditionIcon === '03n') {
			return (
				<div className="sunny">
					<div className="ui centered grid">
						<iframe title="sunny" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX1UA045EoPG" width="600" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: '30px'}}></iframe>
					</div>
				</div>
			);
		}

	else if ( conditionIcon === '13d' || conditionIcon === '13n') {
			return (
				<div className="snow">
					<div className="ui centered grid">
						<iframe title="snow" src="https://open.spotify.com/embed/playlist/2HgNCwQ0nZIMgyqnFGyhFu" width="600" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: '30px'}}></iframe>
					</div>
				</div>
			);
		}

	else if ( conditionIcon === '50d' || conditionIcon === '50n' || conditionIcon === '04d' || conditionIcon ==='04n' ) {
			return (
				<div className="cloudy">
					<div className="ui centered grid">
						<iframe title="cloudy" src="https://open.spotify.com/embed/playlist/6ch64c7EaRQPcQ1rgO5w9H" width="600" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: '30px'}}></iframe>
					</div>
				</div>
			);
		}

	return (
				<div className="cloudy">
					<div className="ui centered grid">
						<iframe title="cloudy" src="https://open.spotify.com/embed/playlist/6ch64c7EaRQPcQ1rgO5w9H" width="600" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: '30px'}}></iframe>
					</div>
				</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(Spotify);

