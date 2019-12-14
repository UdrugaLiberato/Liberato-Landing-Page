import React, { Component } from 'react';
import Layout from './components/Layout/';
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from 'react-router-dom';

// Import Css
import './Apps.scss';

const index = React.lazy(() => import('./pages/index'));

function withLayout(WrappedComponent) {
	// ...and returns another component...
	return class extends React.Component {
		render() {
			return (
				<Layout>
					<WrappedComponent></WrappedComponent>
				</Layout>
			);
		}
	};
}

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<React.Suspense fallback={<div></div>}>
						<Switch>
							<Route path="/" component={withLayout(index)} />
						</Switch>
					</React.Suspense>
				</Router>
			</React.Fragment>
		);
	}
}

export default withRouter(App);
