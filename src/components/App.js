import React from 'react';
import Weather from './Weather';
import Spotify from './Spotify';
import { Grid } from 'semantic-ui-react';
import './App.css';

const App = () => {
	return (
		<div className="page">
			
			<Grid stackable columns={2}>
				<Grid.Column>
					<h1>Mood Music.</h1>
				</Grid.Column>
				<Grid.Row>
				<Grid.Column>
					<Weather />
				</Grid.Column>
				<Grid.Column>
					<Spotify />
				</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
		);
}

export default App;