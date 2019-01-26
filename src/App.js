import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Pages/Home'
import Scoreboard from './Pages/Scoreboard'
import Emoji from './Utils/Emoji';
import { NotFound } from './Pages/NotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<header className="navbar">
						<ul>
							<li>
								<Link to="/">Facemash</Link>
							</li>
						</ul>
					</header>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route exact path="/scoreboard" component={ Scoreboard } />
						<Route component={ NotFound } />
					</Switch>
					<footer>
						<Link to="/scoreboard">
							<Emoji symbol="🐱" label="cat" />Discover which cats rocks
						</Link>
					</footer>
				</div>
			</Router>
		)
	}
}

export default App
