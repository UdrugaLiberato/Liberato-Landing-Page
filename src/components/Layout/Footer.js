import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { mdiFacebook } from '@mdi/js';
import Icon from '@mdi/react';

class FooterWithoutMenu extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className="footer footer-bar">
					<div className="container text-center">
						<Row className="align-items-center">
							<Col sm={6}>
								<div className="text-sm-left">
									© {new Date().getFullYear()} Liberato. From Split with{' '}
									<span className="text-danger">&hearts;</span>.
								</div>
							</Col>

							<Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
								<ul className="list-unstyled social-icon social mb-0 text-sm-right">
									<li className="list-inline-item">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://www.facebook.com/UdrugaLiberato/"
										>
											<Icon path={mdiFacebook} size={1} />
										</a>
									</li>
								</ul>
							</Col>
						</Row>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default FooterWithoutMenu;
