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
			cvc: '000',
			month: '00',
			year: '00',
			onError: {
				errorName: null,
				errorNumber: null,
				errorCVC: null,
				errorMonth: null,
				errorYear: null,
			},
		};
		this.onNameChange = this.onNameChange.bind(this);
		this.onNumberChange = this.onNumberChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onSubmitName = this.onSubmitName.bind(this);
	}

	onNameChange(event) {
		this.setState({
			name: event.target.value,
		});
	}
	onNumberChange(event) {
		let currentValue = event.target.value.toString().padEnd(16, '0');

		currentValue = `${currentValue.slice(0, 4)} ${currentValue.slice(
			4,
			8
		)} ${currentValue.slice(8, 12)} ${currentValue.slice(12, 16)}`;

		this.setState({
			cardNumber: currentValue,
		});
	}
	onSubmit() {
		let name = this.onSubmitName();
		let cardNumber;

        this.setState({
			onError: {
				errorName: name,
			}
		})
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

	render() {
		const methods = {
			onNameChange: this.onNameChange,
			onNumberChange: this.onNumberChange,
			onSubmit: this.onSubmit,
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
