import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
								<Link className="logo-footer" to="#">
									Liberato<span className="text-primary">.</span>
								</Link>
								<p className="mt-4">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Labore nihil magnam quae.
								</p>
								<ul className="list-unstyled social-icon social mb-0 mt-4">
									<li className="list-inline-item">
										<a
											target="_blank"
											href="https://www.facebook.com/UdrugaLiberato/"
										>
											<i className="mdi mdi-facebook" title="Facebook"></i>
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-6 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
								<h4 className="text-light footer-head">Newsletter</h4>
								<p className="mt-4">
									Prijavite se i prvi doznajte novosti o Liberatu!
								</p>
								<form>
									<div className="row">
										<div className="col-lg-12">
											<div className="foot-subscribe form-group position-relative">
												<label>
													Upišite svoj email{' '}
													<span className="text-danger">*</span>
												</label>
												<i className="mdi mdi-email ml-3 icons"></i>
												<input
													type="email"
													name="email"
													id="emailsubscribe"
													className="form-control pl-5 rounded"
													placeholder="Email : "
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<input
												type="submit"
												id="submitsubscribe"
												name="send"
												className="btn btn-primary w-100"
												value="Prijavite se"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</footer>
				<hr />
				<footer className="footer footer-bar">
					<div className="container text-center">
						<div className="row align-items-center">
							<div className="col-sm-6">
								<div className="text-sm-left">
									<p className="mb-0">
										© {new Date().getFullYear()} Liberato. From Split with <span className="text-danger">&hearts;</span>.
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;
