import React from 'react';
import AppDisplay from './AppDisplay';
import AppInput from './AppInput';
import AppFinish from './AppFinish';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Cardholder name',
			cardNumber: 'card number',
			cvc: 'CVC',
			month: 'MM',
			year: 'YY',
			onError: {
				errorName: null,
				errorNumber: null,
				errorCVC: null,
				errorMonth: null,
				errorYear: null,
				//any true value in onError means that form has errors
			},
		};
		this.onNameChange = this.onNameChange.bind(this);
		this.onNumberChange = this.onNumberChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onSubmitName = this.onSubmitName.bind(this);
		this.onNumberSubmit = this.onNumberSubmit.bind(this);
		this.onCvcChange = this.onCvcChange.bind(this);
		this.onCvcSubmit = this.onCvcSubmit.bind(this);
	}

	onNameChange(event) {
		this.setState({
			name: event.target.value,
		});
	}
	onNumberChange(event) {
		event.target.value = event.target.value.replace(/\D/g, '');
		let currentValue = event.target.value.toString().padEnd(16, '0');

		currentValue = `${currentValue.slice(0, 4)} ${currentValue.slice(
			4,
			8
		)} ${currentValue.slice(8, 12)} ${currentValue.slice(12, 16)}`;
		// puts space on every fourth digit on displayed card model
		this.setState({
			cardNumber: currentValue,
		});
	}
	onCvcChange(event) {
		event.target.value = event.target.value.replace(/\D/g, '');
		let value = event.target.value;
		if (value.length > 3) {
			value = value.slice(0, 3);
		}
		this.setState({
			cvc: value,
		});
	}

	onSubmit() {
		// runs functions witch validate if form fields are filled correct
		let name = this.onSubmitName();
		let cardNumber = this.onNumberSubmit();
		let cvc = this.onCvcSubmit();
		this.setState({
			onError: {
				errorName: name,
				errorNumber: cardNumber,
				errorCVC: cvc,
			},
		});
	}

	onSubmitName() {
		const regName = /^[a-zA-Z]+ [a-zA-Z]+$/; // validates the name field if it's constructed with a two words made only from letters (with one space between).
		if (
			!regName.test(this.state.name) ||
			this.state.name.toLocaleLowerCase() === 'cardholder name'
		) {
			return true;
		} else {
			return false;
		}
	}
	onNumberSubmit() {
		const cardNumberInputField = document.getElementById('cardnumber').value;
		let result = cardNumberInputField.toString().length !== 16 ? true : false;
		return result;
	}
	onCvcSubmit() {
		if (this.state.cvc.length !== 3 || this.state.cvc === 'cvc') {
			return true;
		} else return false;
	}

	render() {
		const methods = {
			onNameChange: this.onNameChange,
			onNumberChange: this.onNumberChange,
			onSubmit: this.onSubmit,
			onCvcChange: this.onCvcChange,
		};
		let formReady = true;
		for (let error of Object.keys(this.state.onError)) {
			if (this.state.onError[error] === true) {
				formReady = true;
				break;
			}
		}
		if (!formReady) {
			return (
				<div className='container'>
					<AppDisplay data={this.state} />
					<AppFinish />
				</div>
			);
		} else {
			return (
				<div className='container'>
					<AppDisplay data={this.state} />

					<AppInput data={this.state} methods={methods} />
				</div>
			);
		}
	}
}

export default App;
