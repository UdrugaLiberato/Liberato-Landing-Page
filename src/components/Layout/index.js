import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Layout Components
import Topbar from './Topbar';
import Footer from './Footer';

// Scroll up button
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

class Layout extends Component {
	componentDidMount() {
		document.getElementById('pageLoader').style.display = 'block';
		setTimeout(function() {
			document.getElementById('pageLoader').style.display = 'none';
		}, 1000);
	}

	render() {
		return (
			<React.Fragment>
				<Topbar />
				{this.props.children}
				<Footer />
				<div id="bottomIcon">
					<ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
