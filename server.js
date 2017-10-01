const express = require('express')
const app = express();
const path = require('path')

app.use(express.static('./client/build'))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'))
})

const server = app.listen(5000, () => {
	console.log('GivingWeb is ready to go on port 5000')
})
