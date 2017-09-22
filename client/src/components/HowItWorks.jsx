import React from 'react'
import { Link } from 'react-router-dom'


import css from './HowItWorks.scss'

class HowItWorks extends React.Component {
	render() {
		return (
			<div className="how-it-works">
				<div className="button-wrapper">
					<button><i className="fa fa-times" aria-hidden="true"></i></button>
				</div>
			</div>
		)
	}
}

export default HowItWorks