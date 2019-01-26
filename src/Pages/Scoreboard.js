import React, { Component } from 'react'
import Emoji from '../Utils/Emoji';

class Scoreboard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			cats: [],
			votes: 0,
			error: '',
			loading: true
		}
	}

	componentDidMount() {
		fetch('/scores', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => res.json())
		.then(data => this.setState({ 
			cats: data.result,
			votes: this.countVotes(data.result),
			loading: false 
		}))
	}

	countVotes = (cats) => cats.reduce((nb, cat) => nb + cat.score, 0)

	render() {
		const { cats, votes, loading } = this.state

		if (loading) return <p>Loading...</p>

		return (
			<div className="scoreboard">
				<div className="title">
					<h1>Scoreboard</h1>
					<p><Emoji symbol="🗳" />{votes} {votes > 1 ? 'votes' : 'vote' }</p>
				</div>

				<div className="cards">
					{ cats.length !== 0 
						? cats.map(cat => 
								<div className="card" key={cat.id}>
									<div className="img-cat" style={{backgroundImage: `url(${cat.url})`}} />
									{cat.id}
									<div className="score"><Emoji symbol="👍" />{cat.score}</div>
								</div>
							) 
						: <div className="card">No votes</div> }
				</div>
			</div>
		)
	}
}

export default Scoreboard
