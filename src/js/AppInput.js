import React from 'react';

import InputOneField from './InputOneField';
class AppInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const nameData = {
			class_name: 'form-name-container',
			label_htmlFor: 'cardholder-name',
			label_text: 'Cardholder Name',
			input_max_length: '26',
			input_place_holder: 'e.g. Jane Appleseed',
			error_text: 'Invalid format, name and surname required.',
		};
		const numberData = {
			class_name: 'form-number-container',
			label_htmlFor: 'cardnumber',
			label_text: 'Card Number',
			input_max_length: '16',
			input_place_holder: 'e.g. 1234 5678 9123 0000',
			error_text: 'Invalid number of characters',
		};
		const cvcData = {
			class_name: 'form-cvc-container',
			label_htmlFor: 'cvc-number',
			label_text: 'CVC',
			input_max_length: '3',
			input_place_holder: 'e.g. 123',
			error_text: 'Three digits required.',
		};

		return (
			<div className='data-container'>
				<form method='post'>
					<InputOneField
						source={nameData}
						error={this.props.data.onError.errorName}
						method={this.props.methods.onNameChange}
					/>

					<InputOneField
						source={numberData}
						error={this.props.data.onError.errorNumber}
						method={this.props.methods.onNumberChange}
					/>

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

						<InputOneField
							source={cvcData}
							error={this.props.data.onError.errorCVC}
							method={this.props.methods.onCvcChange}
						/>
					</div>

					<button
						type='button'
						id='confirm-btn'
						onClick={this.props.methods.onSubmit}>
						Confirm
					</button>
				</form>
			</div>
		);
	}
}

export default AppInput;
