const express = require('express')
const app = express()
const path = require('path')

const base64Img = require('base64-img')
const uuidV1 = require('uuid/v1');
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.static('./build'))

//Upload Image hardcode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/upload', function(req, res) {
	imgData = req.body.img
	imgName = uuidV1()

	base64Img.img(imgData, "./build/images/members", imgName, function(err, data) {
		if (err) {
			res.status(500).send({ error: "Something wrong with your image, look at log", log: err })
		} else {
			res.send({ response: "saved", imgName})
		}
	})
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'))
})

const server = app.listen(5000, () => {
	console.log('GivingWeb is ready to go on port 5000')
})
