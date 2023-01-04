import React from 'react';

class AppFinish extends React.Component {
	constructor() {
			super();
			this.reload = this.reload.bind(this);
			
	}

	reload() {
		window.location.reload();
	}
	
	render() {
		setTimeout(this.reload, 5000)
		return (
			<div className='thank-you-window'>
				<img src='./images/icon-complete.svg' alt='' />
				<p className='thank-you-label'>thank you!</p>
				<p className='thank-you-text'>We've added your card details</p>
				<button
					type='submit'
					onClick={this.reload}>
					Continue
				</button>
			</div>
		);
	}
}

export default AppFinish;
