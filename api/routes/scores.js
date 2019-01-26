const express = require('express')
const router = express.Router()
const cats = require('../data/cats.json')

// Get scores
router.get('/', (req, res) => {
	const newCats = cats.images
		.filter(cat => cat.score)
		.sort((a, b) => b.score - a.score)
	res.json({ 'result': newCats })
})

module.exports = router
