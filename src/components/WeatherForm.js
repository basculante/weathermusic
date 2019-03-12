import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchWeather } from '../actions';
import { Form, Message, Button } from 'semantic-ui-react';
import './Weather.css';

class WeatherForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<Message 
					error
					content={error}
				/>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label style={{color: 'white'}}>{label}</label>
				<Form.Input { ...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.fetchWeather(formValues.city, formValues.country);
	}

	render () {
		return (
			<div className="form">
				<Form onSubmit={this.props.handleSubmit(this.onSubmit)} error>
					<Field name="city" component={this.renderInput} label="Enter City" className="weather-form"/>
					<Field name="country" component={this.renderInput} label="Enter Country" />
					<Button className="button" style={{marginTop:'2vh', marginBottom: '2vh'}}>Submit</Button>
				</Form>
			</div>
		);
	}
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.city) {
		errors.city = 'Please enter a city.';
	}

	if (!formValues.country) {
		errors.country = 'Please enter a country.';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'weatherForm',
	validate
})(WeatherForm);

export default connect(null, { fetchWeather })(formWrapped);