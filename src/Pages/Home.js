import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			cats: [],
			board: [],
			error: '',
			loading: true
		}
	}

	componentDidMount() {
		fetch('/cats', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => res.json())
		.then(data => (data.error) ?
		this.setState({ 
				error: 'Something went wrong',
				loading: false 
			})
		:
			this.setState({ 
				cats: data.result, 
				board: this.generateBoard(data.result),
				loading: false 
			})
		)
	}

	// Push score to Scoreboard
	handleClick = id => {
		fetch(`/cats/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => {
			res.status === 200 
				? this.setState({ board: this.generateBoard(this.state.cats) }) 
				: this.setState({ error: 'Something went wrong' })
		})
	}

	// Generate a board of 2 cats randomly
	generateBoard(object) {
		const result = []
		const cats = shuffle(object)

		while (result.length < 2) {
			const cat = cats.pop()
			result.push(cat)
		}
		return result
	}

	render() {
		const { board, loading, error } = this.state

		if (loading) return <p>Loading...</p>

		return (
			<div className="facemash">
				<div className="title">
					<h1>Versus</h1>
					<p>Which cat rocks more ? Do your choice !</p>
				</div>
				{ error && <p>{error}</p> }
				<div className="left" key={board[0].id}>
					<div className="img-cat" 
						style={{backgroundImage: `url(${board[0].url})`}} 
						onClick={ () => this.handleClick(board[0].id) }
					/>
				</div>
				<div className="right" key={board[1].id}>
				<div className="img-cat" 
						style={{backgroundImage: `url(${board[1].url})`}} 
						onClick={ () => this.handleClick(board[1].id) }
					/>
				</div>
			</div>
		)
	}
}

export default Home
