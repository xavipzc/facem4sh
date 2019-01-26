import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Pages/Home'
import Scoreboard from './Pages/Scoreboard'

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
					</Switch>
					<footer>
						<Link to="/scoreboard">🐱Discover which cats rocks</Link>
					</footer>
				</div>
			</Router>
		)
	}
}

export default App
