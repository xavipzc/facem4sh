import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			cats: [],
			board: [],
			loading: true
		}
	}

	componentDidMount() {
		fetch('/cats', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => res.json())
		// .then(data => console.log(data.result))
		.then(data => this.setState({ 
			cats: data.result, 
			board: this.generateBoard(data.result), 
			loading: false 
		}))
	}

	handleClick = id => {
		// Push result to Scoreboard
		console.log(id)
		// New board

	}

	generateBoard(object) {
		const result = []
		const cats = shuffle(object)
		while (result.length < 2) {
			const cat = cats.pop()
			result.push(cat)
		}
		return shuffle(result)
	}

	render() {
		const { board, loading } = this.state

		console.log(board)

		if (loading) return <p>Loading...</p>

		return (
			<div className="facemash">
				<div key={board[0].id}>
					<img src={ board[0].url } onClick={ () => this.handleClick(board[0].id) } />
				</div>
				<div key={board[1].id}>
					<img src={ board[1].url } onClick={ () => this.handleClick(board[1].id) } />
				</div>
			</div>
		)
	}
}

export default Home
