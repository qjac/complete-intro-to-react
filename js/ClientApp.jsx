import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<BrowserRouter>
		<div className="app">
			{/* switch makes a siwtch statement that only renders ONE component at a time and flips through them sequentially */}
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={FourOhFour} />
				{/* 404 goes last in component list. If nothing before matches, then you get a 404. */}
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById('app'));
