// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Feature Images
import fast from '../images/feature/undraw_fast_loading_0lbh.svg';
import simple from '../images/feature/undraw_note_list_etto.svg';
import free from '../images/feature/undraw_wallet_aym5.svg';

// Import Generic Components
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import Feature from '../components/Feature';
import Partner from '../components/Partner';
import AboutUs from '../components/AboutUs';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

class Index extends Component {
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
		const featureArray = [
			{
				id: 1,
				title: 'Brzo',
				description:
					'U svega par klikova miša biti će omogućen unos novih lokacija (objekata) na mapu, kontakt informacije te galerija slika.',
				imgUrl: fast,
			},
			{
				id: 2,
				title: 'Besplatno',
				description:
					'Pregledavanje svih objekata te dodavanja novih je potpuno besplatno.',
				imgUrl: free,
			},
			{
				id: 3,
				title: 'Jednostavno',
				description:
					'Za pregled karte Vam je potreban samo internet preglednik. Aplikacija je prilagođena i za mobilne uređaje.',
				imgUrl: simple,
			},
		];

		return (
			<React.Fragment>
				{/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

				{/* Home Section */}
				<Home />

				{/* Features of App */}
				<section className="section">
					<Feature featureArray={featureArray} isCenter={true} />
				</section>

				{/* FAQ */}
				<Faq />

				{/* partner */}
				<section id="partners" className="pt-5 pb-5 bg-light">
					<div className="container">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-60">
									<h4 className="main-title mb-4">Partneri projekta</h4>
								</div>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Partner />
						</Row>
					</div>
				</section>

				{/* About Us */}
				<AboutUs />

				{/* Testi */}
				<Testimonials />

				{/* Contact */}
				<Contact />
			</React.Fragment>
		);
	}
}

export default Index;
