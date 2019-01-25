const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()


//production mode
if (process.env.NODE_ENV === 'production') {
		app.use(express.static(path.join(__dirname, 'client/build')))

		.get('*', (req, res) => {
			res.sendfile(path.join(__dirname = 'client/build/index.html'))
		})
}

app.get('/cats', function (req, res) {
	res.json({ 'result': 'ok' })
})

app.listen(port, () => 
	console.log(`Server listening on port: ${port}`))
