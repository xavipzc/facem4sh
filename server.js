const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()

// Routes
const catRoutes = require('./api/routes/cats')
const scoreRoutes = require('./api/routes/scores')

//production mode
if (process.env.NODE_ENV === 'production') {
		app.use(express.static(path.join(__dirname, 'client/build')))

		.get('*', (req, res) => {
			res.sendfile(path.join(__dirname = 'client/build/index.html'))
		})
}

app.use('/cats', catRoutes)
app.use('/scores', scoreRoutes)

app.listen(port, () => 
	console.log(`Server listening on port: ${port}`))
