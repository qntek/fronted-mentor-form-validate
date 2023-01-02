import React from 'react';

class AppFinish extends React.Component {
	render() {
		return (
			<div className='thank-you-window'>
				<img src='./images/icon-complete.svg' alt='' />
				<p className='thank-you-label'>thank you!</p>
				<p className='thank-you-text'>We've added your card details</p>
				<button
					type='submit'>
					Continue
				</button>
			</div>
		);
	}
}

export default AppFinish;
