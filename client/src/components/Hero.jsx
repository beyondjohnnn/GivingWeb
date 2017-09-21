import React from 'react'
import { Link } from 'react-router-dom'


import css from './Hero.scss'

class Hero extends React.Component {
	render() {
		return (
			<div className="hero">
				<div className="captions">
					<h2>
						Make Change Happen
					</h2>
					<p>
						Directly support amazing people and charities today
					</p>
					<Link className="call-to-action" to="/">
						SEE HOW IT WORKS
						<i className="fa fa-chevron-down" aria-hidden="true"></i>
					</Link>
				</div>
			</div>
		)
	}
}

export default Hero