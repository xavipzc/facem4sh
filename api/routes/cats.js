const express = require('express')
const router = express.Router()
const cats = require('../data/cats.json')

// Get all cats
router.get('/', (req, res) => {
	res.json({ 'result': cats.images })
})

// Get cat info
router.get('/:catsID', (req, res) => {
	const { catsID } = req.params

	const cat = cats.images.filter(c => c.id === catsID)
	res.json({ 'result': cat })
})

// Update score in cats
router.patch('/:catsID', (req, res) => {
	const { catsID } = req.params

	const newCats = cats.images.reduce((cats, i) => {
		if (i.id === catsID) {
			const score = (i.score) ? (i.score + 1) : 1
			cats.push({...i, score: score})
		} else {
			cats.push(i)
		}
		return cats
	}, [])

	// update cats locally
	cats.images = newCats

	res.json({ 'result': cats })
})

module.exports = router
