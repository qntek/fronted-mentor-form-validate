import React from 'react';

class AppInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='data-container'>
				<form method='post'>
					<div className='form-name-container'>
						<label htmlFor='cardholder-name'>Cardholder Name</label>
						<input
							type='text'
							name='cardholder'
							maxLength='50'
							id='cardholder-name'
							placeholder='e.g. Jane Appleseed'
						/>
						<p className='error error-cardholder off'>
							Invalid format, name and surname required.
						</p>
					</div>

					<div className='form-number-container'>
						<label htmlFor='cardnumber'>Card Number</label>
						<input
							type='text'
							name='cardnumber'
							id='cardnumber'
							placeholder='e.g. 1234 5678 9123 0000'
							pattern='\d*'
							maxLength='16'
						/>
						<p className='error error-cardnumber off'>
							Invalid number of characters
						</p>
					</div>

					<div className='form-date-cvc-container'>
						<div className='form-date-container'>
							<p className='expire-date'>EXP. DATE (MM/YY)</p>

							<div className='form-date-inputs'>
								<label className='exp-date-mm' htmlFor='exp-month'></label>
								<input
									type='number'
									min='1'
									max='12'
									id='exp-month'
									placeholder='MM'
									pattern='\d*'
									maxLength='2'
								/>
								<label className='exp-date-yy' htmlFor='exp-year'></label>
								<input
									type='number'
									pattern='\d*'
									maxLength='2'
									id='exp-year'
									placeholder='YY'
								/>
							</div>

							<p className='error error-date off'>Invalid format (MM / YY)</p>
						</div>

						<div className='form-cvc-container'>
							<label htmlFor='cvc-number' className='cvc-number'>
								CVC
							</label>
							<input
								type='text'
								name='cvc-number'
								pattern='\d*'
								maxLength='3'
								id='cvc-number'
								step='1'
								placeholder='e.g. 123'
							/>
							<p className='error error-cvc off'>Three digits required.</p>
						</div>
					</div>

					<button type='button' id='confirm-btn'>
						Confirm
					</button>
				</form>
			</div>
		);
	}
}

export default AppInput;
