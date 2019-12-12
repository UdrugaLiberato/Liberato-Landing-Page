import React, { Component } from 'react';
import { Link as Scroll } from 'react-scroll';
import { withRouter } from 'react-router';

class Topbar extends Component {
	render() {
		return (
			<React.Fragment>
				<header id="topnav" className="defaultscroll sticky">
					<div className="container">
						<div>
							<Scroll className="logo" to="home" duration={500} smooth={true}>
								Liberato<span className="text-primary">.</span>
							</Scroll>
						</div>
						<div className="buy-button">
							<a
								target="_blank"
								href="https://www.facebook.com/UdrugaLiberato/"
								className="btn btn-primary"
							>
								Go to Facebook
							</a>
						</div>

						<div id="navigation" style={{ display: 'none' }}>
							<ul className="navigation-menu" id="top-menu">
								<li>
									<Scroll to="home" smooth={true} duration={500}>
										Home
									</Scroll>
								</li>
								<li>
									<Scroll to="how-it-works" smooth={true} duration={500}>
										Kako radi
									</Scroll>
								</li>
								<li>
									<Scroll
										to="partners"
										offset={-150}
										smooth={true}
										duration={500}
									>
										Partneri
									</Scroll>
								</li>
								<li>
									<Scroll to="team" smooth={true} duration={500}>
										Tim
									</Scroll>
								</li>
								<li>
									<Scroll
										to="contact"
										smooth={true}
										duration={500}
										offset={-550}
									>
										Kontakt
									</Scroll>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}

export default withRouter(Topbar);
