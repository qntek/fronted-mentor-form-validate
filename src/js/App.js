import React from 'react';
import AppDisplay from './AppDisplay';
import AppInput from './AppInput';
import AppFinish from './AppFinish';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Jane Appleseed',
			cardNumber: '0000 0000 0000 0000',
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

	render() {
		const methods = {
			onNameChange: this.onNameChange,
			onNumberChange: this.onNumberChange,
		};
		let formReady = true;
		for (let error of Object.keys(this.state.onError)) {
			if (this.state.onError[error] === true) {
				formReady = false;
				break;
			}
		}
		if (formReady) {
			return (
				<div className='container'>
					<AppDisplay data={this.state} />
					<AppInput data={this.state} methods={methods} />
				</div>
			);
		} else {
			return (
				<div className='container'>
					<AppDisplay data={this.state} />
					<AppFinish />
				</div>
			);
		}
	}
}

export default App;
