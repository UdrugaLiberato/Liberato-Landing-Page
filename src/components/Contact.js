// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import roundDark from '../images/shapes/round-dark.png';

class Contact extends Component {
	componentDidMount() {
		document.body.classList = '';
		window.addEventListener('scroll', this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollNavigation);
	}

	scrollNavigation = () => {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		if (top > 80) {
			document.getElementById('topnav').classList.add('nav-sticky');
		} else {
			document.getElementById('topnav').classList.remove('nav-sticky');
		}
	};

	render() {
		return (
			<React.Fragment>
				<section id="contact" className="section">
					<div className="container">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="title mb-4">Želite biti prvi?</h4>
									<p className="text-muted para-desc mx-auto mb-0">
										Osigurajte svoje mjesto na{' '}
										<span className="text-primary font-weight-bold">
											Liberatu!
										</span>{' '}
										Javite nam se s željom dodavanja vašeg objekta prije svih!
									</p>
								</div>
							</Col>
						</Row>

						<Row className="justify-content-center mt-4 pt-2">
							<Col lg={7} md={10} className="text-center">
								<a href="mailto:info@liberato.io" className="btn btn-primary">
									Kontaktiraj nas
								</a>
							</Col>
						</Row>
					</div>

					<div className="container-fluid">
						<Row>
							<div className="home-shape-bottom">
								<img
									src={roundDark}
									alt=""
									className="img-fluid mx-auto d-block"
								/>
							</div>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
export default Contact;
