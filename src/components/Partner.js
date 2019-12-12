// React Basic and Bootstrap
import React, { Component } from 'react';
import { Col } from 'reactstrap';

// Import Images
import splitX from '../images/partners/splitX.png';
import inspiration4web from '../images/partners/inspiration4web.png';
import ictzupanija from '../images/partners/ictzupanija.png';
import oss from '../images/partners/oss.png';
import gradSplit from '../images/partners/gradSplit.svg';
import client6 from '../images/client/6.png';

class Partner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<Col lg={2} md={2} className="col-6 text-center">
					<img src={splitX} height="70" alt="SplitX logo" />
				</Col>

				<Col lg={2} md={2} className="col-6 text-center">
					<img src={inspiration4web} height="70" alt="inspiration4web logo" />
				</Col>

				<Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
					<img src={ictzupanija} height="70" alt="" />
				</Col>

				<Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
					<img src={oss} height="70" alt="" />
				</Col>

				<Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
					<img src={gradSplit} height="70" alt="" />
				</Col>

			</React.Fragment>
		);
	}
}

export default Partner;
