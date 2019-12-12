// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// RBCarousel Declare
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

// Import images
import armando from '../images/testi/armando.jpeg';
import cubelic from '../images/testi/cubelic.jpg';
import maljkovic from '../images/testi/maljkovic.jpg';

import '../css/carousel.css';

const items = [
	{
		id: 1,
		image: armando,
		title: 'Armando Matijević',
		description:
			'Strast za rješenjem problema koji proizlazi iz realne situacije je uvik odlična kombinacija za uspijeh. A kada uz to imate upornost i želju za unapređenjem svoje okoline i bližnjih, onda to nije samo biznis. Već i plemenita akcija.',
		role: 'CEO - SplitX',
	},
	{
		id: 2,
		image: cubelic,
		title: 'Mario Ćubelić',
		description:
			' Liberato je primjer rješenja koje proizlazi iz svakodnevne potrebe osoba s poteškoćama u kretanju. Smatram da rješenje koje nudi Liberato uz njihovu volju i upornost zaživjeti na način koji su oni to osmislili.',
		role: 'CEO - Cezar',
	},
	{
		id: 3,
		image: maljkovic,
		title: 'Marko Maljković ',
		description:
			' Ogromna količina pozitivne energije i fokusiranosti da naprave pravu stvar, dala mi je do znanja kako je ovo tek jedan u nizu projekata kojim ce Stipo i ekipa učiniti grad Split boljim i kvalitetnijim za sve nas.',
		role: 'CDO - Locastic',
	},
];

class Testimonials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			autoplay: true,
			itemCount: 2,
			cols: 3,
			total: 3,
		};
	}

	slideNext = () => {
		this.slider.slideNext();
	};
	slidePrev = () => {
		this.slider.slidePrev();
	};
	goToSlide = () => {
		this.slider.goToSlide(4);
	};
	autoplay = () => {
		this.setState({ autoplay: !this.state.autoplay });
	};
	_changeIcon = () => {
		let { leftIcon, rightIcon } = this.state;
		leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
		rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
		this.setState({ leftIcon, rightIcon });
	};

	componentDidMount() {
		window.addEventListener('resize', this.updateWindowSize);
		this.updateWindowSize();
	}
	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowSize);
	}

	updateWindowSize = () => {
		if (window.outerWidth >= 1230) {
			this.setState({ itemCount: 3, cols: 4 });
		} else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
			this.setState({ itemCount: 2, cols: 6 });
		} else if (window.outerWidth <= 970) {
			this.setState({ itemCount: 1, cols: 12 });
		}
	};

	showItems = () => {
		var itemsData = [];
		var data = [];
		for (var i = 0; i < this.state.total; i++) {
			if (i % this.state.itemCount === 0 && i > 0) {
				data.push(
					<div className="item" key={i}>
						<div className="row">{itemsData}</div>
					</div>,
				);
				itemsData = [];
			}
			itemsData.push(
				<div className={`col-md-${this.state.cols}`} key={items[i].id}>
					<div className="customer-testi text-left">
						<img
							src={items[i].image}
							height="80"
							className="rounded shadow float-left mr-3"
							alt=""
						/>
						<div className="content overflow-hidden d-block p-3 shadow rounded bg-white">
							<ul className="list-unstyled mb-0">
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
								<li className="list-inline-item">
									<i className="mdi mdi-star text-warning"></i>
								</li>
							</ul>
							<p className="text-muted mt-2">" {items[i].description}"</p>
							<h6 className="text-primary">
								- {items[i].title}{' '}
								<small className="text-muted">{items[i].role}</small>
							</h6>
						</div>
					</div>
				</div>,
			);
		}
		if (itemsData) {
			data.push(
				<div className="item" key={i}>
					<div className="row">{itemsData}</div>
				</div>,
			);
		}
		return data;
	};

	render() {
		return (
			<React.Fragment>
				<section className="section bg-light" id="testi">
					<div className="container">
						<Row className="justify-content-center">
							<Col className="text-center">
								<div className="section-title mb-60">
									<h4 className="main-title mb-4">Što kažu o nama</h4>
									<p className="text-muted para-desc mx-auto mb-0">
										Kako{' '}
										<span className="text-primary font-weight-bold">
											Liberato
										</span>{' '}
										može promjeniti Vaš život
									</p>
								</div>
							</Col>
						</Row>

						<Row className="justify-content-center">
							<Col lg={12} className="text-center">
								<RBCarousel
									version={4}
									autoplay={this.state.autoplay}
									pauseOnVisibility={true}
									onSelect={this.visiableOnSelect}
									slideshowSpeed={3000}
								>
									{this.showItems()}
								</RBCarousel>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Testimonials;
