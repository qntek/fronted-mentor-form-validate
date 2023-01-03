import React from 'react';

class InputOneField extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={this.props.source.class_name}>
				<label htmlFor={this.props.source.label_htmlFor}>
					{this.props.source.label_text}
				</label>
				<input
					className={this.props.error === true ? 'error-border' : ''}
					id={this.props.source.label_htmlFor}
					type='text'
					maxLength={this.props.source.input_max_length}
					placeholder={this.props.source.input_place_holder}
					onChange={this.props.method}
				/>
				<p
					className={
						this.props.error === true
							? 'error error-cardholder'
							: 'error error-cardholder off'
					}>
					{this.props.source.error_text}
				</p>
			</div>
		);
	}
}

export default InputOneField;
