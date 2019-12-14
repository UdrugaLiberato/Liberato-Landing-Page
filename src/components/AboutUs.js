// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { mdiFacebook, mdiInstagram, mdiGmail } from '@mdi/js';
import Icon from '@mdi/react';

// import images
import stipo from '../images/team/stipo.jpg';
import mijo from '../images/team/mijo.jpg';
import ivan from '../images/team/ivan.jpg';

const teamMembers = [
	{
		name: 'Mijo Matijević',
		role: 'Dopredsjednik',
		facebook: 'https://www.facebook.com/mijo.matijevic',
		instagram: 'https://www.instagram.com/mijo_matijevic',
		mail: 'mijo@liberato.io',
		picture: mijo,
	},
	{
		name: 'Stipo Margić',
		role: 'Predsjednik',
		facebook: 'https://www.facebook.com/stipo.margic',
		instagram: 'https://www.instagram.com/stipo.margic',
		mail: 'stipo@liberato.io',
		picture: stipo,
	},
	{
		name: 'Ivan Ivančević',
		role: 'Suosnivač',
		facebook: 'https://www.facebook.com/cevaxd',
		instagram: 'https://www.instagram.com/ivancevic.ivan',
		mail: 'ivan@liberato.io',
		picture: ivan,
	},
];

class AboutUs extends Component {
	componentDidMount() {
		document.body.classList = '';
		window.addEventListener('scroll', this.scrollNavigation, true);
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollNavigation);
	}

	render() {
		return (
			<React.Fragment>
				<section id="team" className="section bg-white">
					<div className="container">
						<Row>
							<Col className="text-center">
								<div className="section-title mb-4 pb-2">
									<h4 className="main-title mb-4">Naš tim</h4>
									<p className="text-muted para-desc mx-auto mb-0">
										<span className="text-primary font-weight-bold">
											Liberato
										</span>{' '}
										je skupina mladih i entuzijastičnih studenata druge godine
										na Sveučilišnom odjelu za stručne studije u Splitu. Započeli
										smo naše djelovanje s idejom izrade interaktivne mape grada
										Splita koja bi uvelike pomogla lakšem i jednostavnijem
										kretanju osoba s invaliditetom po gradu Splitu
									</p>
								</div>
							</Col>
						</Row>

						<Row>
							{teamMembers.map((member, i) => {
								return (
									<Col lg={4} md={6} className="mt-4 pt-2">
										<div className="team text-center">
											<div className="position-relative">
												<img
													src={member.picture}
													className="img-fluid d-block rounded-pill mx-auto"
													alt={member.name + 'picture'}
												/>
												<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
													<li className="list-inline-item">
														<a
															target="_blank"
															rel="noopener noreferrer"
															href={member.facebook}
															className="rounded mr-1"
														>
															<Icon path={mdiFacebook} size={1} />
														</a>
													</li>
													<li className="list-inline-item">
														<a
															target="_blank"
															rel="noopener noreferrer"
															href={member.instagram}
															className="rounded mr-1"
														>
															<Icon path={mdiInstagram} size={1} />
														</a>
													</li>
													<li className="list-inline-item">
														<a
															href={'mailto:' + member.mail}
															className="rounded mr-1"
														>
															<i className="mdi mdi-gmail" title="Mail"></i>
															<Icon path={mdiGmail} size={1} />
														</a>
													</li>
												</ul>
											</div>
											<div className="content pt-3 pb-3">
												<h5 className="mb-0">
													<Link to="#" className="name text-dark">
														{member.name}
													</Link>
												</h5>
												<small className="designation text-muted">
													{member.role}
												</small>
											</div>
										</div>
									</Col>
								);
							})}
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
export default AboutUs;
