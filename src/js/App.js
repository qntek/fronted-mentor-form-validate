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
	}
	render() {
		let formReady = true;
		// for (let error of this.state.onError) {
		// 	if (this.state.onError[error] === true) {
		// 		formReady = false;
		// 		break;
		// 	}
		// }
		if (formReady) {
			return (
				<div className='container'>
					<AppDisplay data={this.state} />
					<AppInput data={this.state} />
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
