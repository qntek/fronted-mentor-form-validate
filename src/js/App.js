import React from 'react';
import AppDisplay from './AppDisplay';
import AppFinish from './AppFinish';

class App extends React.Component {
	constructor() {
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
		let formReady = false;

		if (formReady) {
			return <AppDisplay data={this.state} />;
			// plus input section;
		} else {
			return (
				<div>
					<AppDisplay data={this.state} />
					<AppFinish />
				</div>
			);
		}
	}
}

export default App;
