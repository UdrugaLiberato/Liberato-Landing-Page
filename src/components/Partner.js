// React Basic and Bootstrap
import React, { Component } from 'react';
import { Col } from 'reactstrap';

// Import Images
import splitX from '../images/partners/splitX.png';
import inspiration4web from '../images/partners/inspiration4web.png';
import ictzupanija from '../images/partners/ictzupanija.png';
import oss from '../images/partners/oss.png';
import gradSplit from '../images/partners/gradSplit.svg';

const partners = [splitX, inspiration4web, ictzupanija, oss, gradSplit];

class Partner extends Component {
	render() {
		return (
			<React.Fragment>
				{partners.map(partner => {
					return (
						<Col lg={2} md={2} className="col-6 text-center">
							<img src={partner} height="70" alt="Partner logo" />
						</Col>
					);
				})}
			</React.Fragment>
		);
	}
}

export default Partner;
