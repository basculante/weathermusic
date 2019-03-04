import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchWeather } from '../actions';

class WeatherForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div>
						{error}
					</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input { ...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = (formValues) => {
		this.props.fetchWeather(formValues.city, formValues.country);
	}

	render () {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="city" component={this.renderInput} label="Enter City" />
				<Field name="country" component={this.renderInput} label="Enter Country" />
				<button className="ui button primary" style={{ marginBottom: '30px' }}>Submit</button>
			</form>
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