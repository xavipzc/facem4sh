const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()

app.use(express.static(path.join(__dirname, 'api/data')))

// Routes
const catRoutes = require('./api/routes/cats')
const scoreRoutes = require('./api/routes/scores')

app.use('/cats', catRoutes)
app.use('/scores', scoreRoutes)

//production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')))

	.get('*', (req, res) => {
		res.sendfile(path.join(__dirname = 'build/index.html'))
	})
}

app.use((req, res, next) => {
	const err = new Error('Not found')
	err.status = 404
	next(err)
})

app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({
		error: err.message
	})
})

app.listen(port, () => 
	console.log(`Server listening on port: ${port}`))
