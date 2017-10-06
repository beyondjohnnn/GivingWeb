const Nightmare = require('nightmare')

const nightmare = Nightmare()

const text = 
	nightmare
		.goto('https://streetchange.org.uk/help-someone/')
		.evaluate(() => {
			return document.querySelector('a.button.large.more').innerHTML
		})
		// .end()
		// .then((data) => {
		// 	if (data == '+ LOAD MORE') {
		// 		return nightmare.click('a.button.large.more').wait(5000)
		// 	}
		// })

console.log(text)
