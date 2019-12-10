// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import stipo from '../images/team/stipo.jpg';
import mijo from '../images/team/mijo.jpg';
import ivan from '../images/team/ivan.jpg';

class AboutUs extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
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
				<section id="team" className="section bg-light">
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
							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={stipo}
											className="img-fluid d-block rounded-pill mx-auto"
											alt="Stipo Margić slika"
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.facebook.com/stipo.margic"
													className="rounded mr-1"
												>
													<i className="mdi mdi-facebook" title="Facebook"></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.instagram.com/stipo.margic"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-instagram"
														title="Instagram"
													></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													href="mailto:stipo@liberato.io"
													className="rounded mr-1"
												>
													<i className="mdi mdi-gmail" title="Mail"></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<Link to="#" className="name text-dark">
												Stipo Margić
											</Link>
										</h5>
										<small className="designation text-muted">
											Predsjednik
										</small>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={mijo}
											className="img-fluid d-block rounded-pill mx-auto"
											alt="Mijo Matijević slika"
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.facebook.com/mijo.matijevic"
													className="rounded mr-1"
												>
													<i className="mdi mdi-facebook" title="Facebook"></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.instagram.com/mijo_matijevic"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-instagram"
														title="Instagram"
													></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													href="mailto:mijo@liberato.io"
													className="rounded mr-1"
												>
													<i className="mdi mdi-gmail" title="Mail"></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<Link to="#" className="name text-dark">
												Mijo Matijević
											</Link>
										</h5>
										<small className="designation text-muted">
											Dopredsjednik
										</small>
									</div>
								</div>
							</Col>

							<Col lg={4} md={6} className="mt-4 pt-2">
								<div className="team text-center">
									<div className="position-relative">
										<img
											src={ivan}
											className="img-fluid d-block rounded-pill mx-auto"
											alt="Ivan Ivančević slika"
										/>
										<ul className="list-unstyled social-icon team-icon mb-0 mt-4">
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.facebook.com/cevaxd"
													className="rounded mr-1"
												>
													<i className="mdi mdi-facebook" title="Facebook"></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													target="_blank"
													href="https://www.instagram.com/ivancevic.ivan"
													className="rounded mr-1"
												>
													<i
														className="mdi mdi-instagram"
														title="Instagram"
													></i>
												</a>
											</li>
											<li className="list-inline-item">
												<a
													href="mailto:ivan@liberato.io"
													className="rounded mr-1"
												>
													<i className="mdi mdi-gmail" title="Mail"></i>
												</a>
											</li>
										</ul>
									</div>
									<div className="content pt-3 pb-3">
										<h5 className="mb-0">
											<Link to="#" className="name text-dark">
												Ivan Ivančević
											</Link>
										</h5>
										<small className="designation text-muted">Suosnivač</small>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
export default AboutUs;
