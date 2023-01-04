import React from 'react';

class InputMonthYear extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let errorClasses = this.props.error.errorYear === true ? 'error error-date' : 'error error-date off';
		return (
			<div className='form-date-container'>
				<p className='expire-date'>EXP. DATE (MM/YY)</p>

				<div className='form-date-inputs'>
					<input
						type='number'
						aria-label='Month'
						min='1'
						max='12'
						id='exp-month'
						placeholder='MM'
						maxLength='2'
						className={this.props.error.errorMonth === true ? 'error-border' : ''}
            onChange={this.props.onMonthChange}
					/>
					<input
						type='number'
						aria-label='Year'
						maxLength='2'
						id='exp-year'
						placeholder='YY'
						className={this.props.error.errorYear === true ? 'error-border' : ''}
            onChange={this.props.onYearChange}
					/>
				</div>

				<p className={errorClasses}>Invalid format (MM / YY)</p>
			</div>
		);
	}
}

export default InputMonthYear;
