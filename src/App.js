import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Pages/Home'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
				<header className="navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/scoreboard">Scoreboard</Link>
						</li>
					</ul>
				</header>
					<Switch>
						<Route exact path="/" component={ Home } />
						{/* <Route exact path="/scoreboard" component={ ScoreBoard } /> */}
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
