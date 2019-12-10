import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Images
import heroPic from '../images/hero-pic.svg';

export default class Home extends Component {
	render() {
		return (
			<div>
				<section className="bg-half-170 border-bottom agency-wrapper" id="home">
					<div className="home-center">
						<div className="home-desc-center">
							<div className="container">
								<Row className="align-items-center">
									<Col lg={7} md={7} className="order-1 order-md-2">
										<div className="title-heading mt-4 ml-lg-5">
											<h1 className="heading mb-3">
												Pristupačnost za sve{' '}
												<span className="text-primary">Liberato</span>
											</h1>
											<p className="para-desc text-muted">
												Liberato omogućuje brz i lagan način zaobilaska
												svakodnevnih arhitektonskih prepreka za osobe s
												invaliditetom.
											</p>
										</div>
									</Col>
									<Col
										lg={5}
										md={5}
										className="order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0"
									>
										<img src={heroPic} className="img-fluid" alt="" />
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
