import React from 'react';
import '../images/card-logo.svg'
class AppDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='bg-container'>
				<div className='card-front'>
					<div>
						<img
							src='./images/card-logo.svg'
							className='card-front-logo'
							alt=''
						/>
						<p className='card-front-number'>
							{this.props.data.cardNumber !== ''
								? this.props.data.cardNumber
								: '0000 0000 0000 0000'}
						</p>
						<p className='card-front-cardholder-name'>{this.props.data.name}</p>
						<p className='card-front-exp-date'>
							<span className='mm'>
								{this.props.data.month !== '' ? this.props.data.month : 'MM'}
							</span>
							/
							<span className='yy'>
								{this.props.data.year !== '' ? this.props.data.year : 'YY'}
							</span>
						</p>
					</div>
				</div>
				<div className='card-reverse'>
					<div>
						<p className='card-reverse-cvc'>
							{this.props.data.cvc !== '' ? this.props.data.cvc : 'CVC'}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AppDisplay;
