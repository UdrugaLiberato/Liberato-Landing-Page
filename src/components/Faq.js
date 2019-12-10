// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Faq extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			collapse1: true,
		};
	}

	render() {
		return (
			<React.Fragment>
				<section id="how-it-works" className="section">
					<div className="container">
						<Row className="align-items-center">
							<Col lg={7}>
								<div className="faq-content mr-lg-5">
									<div className="accordion" id="accordionExample">
										<div className="card border rounded shadow mb-2">
											<Link
												to="#"
												onClick={() =>
													this.setState({
														collapse1: !this.state.collapse1,
														collapse3: false,
														collapse2: false,
														collapse4: false,
													})
												}
												className={
													this.state.collapse1
														? 'faq position-relative text-primary'
														: 'faq position-relative text-dark'
												}
											>
												<div className="card-header bg-light p-3">
													<h4 className="title mb-0 faq-question">
														{' '}
														Kako Liberato radi ?{' '}
													</h4>
												</div>
											</Link>
											<Collapse isOpen={this.state.collapse1}>
												<div className="card-body">
													<p className="text-muted mb-0 faq-ans">
														There are many variations of passages of Lorem Ipsum
														available, but the majority have suffered alteration
														in some form, by injected humour, or randomised
														words which don't look even slightly believable.
													</p>
												</div>
											</Collapse>
										</div>
										<div className="card border rounded shadow mb-2">
											<Link
												to="#"
												onClick={() =>
													this.setState({
														collapse2: !this.state.collapse2,
														collapse3: false,
														collapse4: false,
														collapse1: false,
													})
												}
												className={
													this.state.collapse2
														? 'faq position-relative text-primary'
														: 'faq position-relative text-dark'
												}
											>
												<div className="card-header bg-light p-3">
													<h4 className="title mb-0 faq-question">
														{' '}
														Što znači "princip" semafora ?{' '}
													</h4>
												</div>
											</Link>
											<Collapse isOpen={this.state.collapse2}>
												<div className="card-body">
													<p className="text-muted mb-0 faq-ans">
														There are many variations of passages of Lorem Ipsum
														available, but the majority, by injected humour, or
														randomised words which don't look even slightly
														believable.
													</p>
												</div>
											</Collapse>
										</div>

										<div className="card border rounded shadow mb-2">
											<Link
												to="#"
												onClick={() =>
													this.setState({
														collapse3: !this.state.collapse3,
														collapse4: false,
														collapse2: false,
														collapse1: false,
													})
												}
												className={
													this.state.collapse3
														? 'faq position-relative text-primary'
														: 'faq position-relative text-dark'
												}
											>
												<div className="card-header bg-light p-3">
													<h4 className="title mb-0 faq-question">
														Koje podrucje obuhvaća Liberato ?{' '}
													</h4>
												</div>
											</Link>
											<Collapse isOpen={this.state.collapse3}>
												<div className="card-body">
													<p className="text-muted mb-0 faq-ans">
														There are many variations of passages of Lorem Ipsum
														available, but the majority have suffered alteration
														in some form, by injected humour, or randomised
														words which believable.
													</p>
												</div>
											</Collapse>
										</div>

										<div className="card rounded shadow mb-0">
											<Link
												to="#"
												onClick={() =>
													this.setState({
														collapse4: !this.state.collapse4,
														collapse3: false,
														collapse2: false,
														collapse1: false,
													})
												}
												className={
													this.state.collapse4
														? 'faq position-relative text-primary'
														: 'faq position-relative text-dark'
												}
											>
												<div className="card-header bg-light p-3">
													<h4 className="title mb-0 faq-question">
														{' '}
														Kako se Liberato financira ?{' '}
													</h4>
												</div>
											</Link>
											<Collapse isOpen={this.state.collapse4}>
												<div className="card-body">
													<p className="text-muted mb-0 faq-ans">
														There are many variations of passages of Lorem Ipsum
														available, but the majority have suffered alteration
														in some form, by injected humour, or randomised
														words which believable.
													</p>
												</div>
											</Collapse>
										</div>
									</div>
								</div>
							</Col>

							<Col lg={5}>
								<div className="row ml-lg-2" id="counter">
									<div className="col-md-6 col-12">
										<Row>
											<Col className="mt-4 pt-2 col-12">
												<div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
													<h2 className="mb-0">
														<span className="counter-value" data-count="97">
															100+
														</span>
													</h2>
													<h5 className="counter-head">Objekata</h5>
												</div>
											</Col>

											<Col className="mt-4 pt-2 col-12">
												<div className="counter-box position-relative counter-border bg-primary shadow rounded p-4 pt-5 pb-5 text-center">
													<h2 className="text-light mb-0">
														<span className="counter-value" data-count="15">
															1
														</span>
														+
													</h2>
													<h5 className="counter-head text-light">Nagrade</h5>
												</div>
											</Col>
										</Row>
									</div>

									<Col md={6} className="col-12">
										<Row className="pt-lg-5 mt-lg-4">
											<Col className="mt-4 pt-2 col-12">
												<div className="counter-box position-relative counter-border bg-success shadow rounded p-4 pt-5 pb-5 text-center">
													<h2 className="text-light mb-0">
														<span className="counter-value" data-count="2">
															3
														</span>
													</h2>
													<h5 className="counter-head text-light">Volontera</h5>
												</div>
											</Col>

											<Col className="mt-4 pt-2 col-12">
												<div className="counter-box position-relative counter-border bg-light shadow rounded p-4 pt-5 pb-5 text-center">
													<h2 className="mb-0">
														<span className="counter-value" data-count="98">
															100
														</span>
														%
													</h2>
													<h5 className="counter-head">Predanosti</h5>
												</div>
											</Col>
										</Row>
									</Col>
								</div>
							</Col>
						</Row>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Faq;
