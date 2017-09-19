import React from 'react'
import { Link } from 'react-router-dom'


import css from './Hero.scss'

class Hero extends React.Component {
	render() {
		return (
			<div className="hero">
				<div className="captions">
					<h2>
						A Hero Title
					</h2>
					<p>
						Some brief but somewhat inspiring text.
					</p>
					<Link className="call-to-action" to="/">
						Get Started
					</Link>
				</div>
			</div>
		)
	}
}

export default Hero