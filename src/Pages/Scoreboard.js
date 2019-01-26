import React, { Component } from 'react'

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
		const { cats, votes, loading, error } = this.state

		if (loading) return <p>Loading...</p>

		return (
			<div className="scoreboard">
				<div className="title">
					<h1>Scoreboard</h1>
					<p>{votes} {votes > 1 ? 'votes' : 'vote' }</p>
				</div>

				<div className="table">
					{ cats.length !== 0 ? cats.map(cat => {
						if (cat.score) return <div key={cat.id}>
							<div className="img-cat" style={{backgroundImage: `url(${cat.url})`}} />
							Name : {cat.id} - Score: {cat.score}
						</div>
					}) : <p>No votes</p> }
				</div>
			</div>
		)
	}
}

export default Scoreboard
