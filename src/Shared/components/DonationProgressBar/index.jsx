import React from 'react'
import { getDonationBarColour } from '../../utils/donations'

import css from './DonationProgressBar.scss'

import Animation from './../../utils/animate'

class DonationProgressBar extends React.Component {

	componentDidMount(){
		this.animateBar()
	}

	componentDidUpdate(){
		this.animateBar()
	}

	buildProgressBars(fillPercent){
		const bars = []
		const barStyles = {
			"backgroundColor": getDonationBarColour(fillPercent),
			"zIndex": 2
		}
		bars[0] = (<div className={`bar-fill member${this.props.memberId}`} key={1} style={barStyles}></div>)

		if(this.props.sponsors.length > 0){
			const matchedBarStyles = {
				"backgroundColor": "#00FFFF",
				"zIndex": 1
			}
			bars[1] = (<div className={`bar-fill member${this.props.memberId}`} key={2} style={matchedBarStyles}></div>)
		}
		return bars
	}

	animateBar(){
		const bars = document.getElementsByClassName(`member${this.props.memberId}`)

		const getWidth = function(){
			let width = 0
			return () => {
				return width+=1
			}
		}()

		const frame = function(){
			let width = getWidth()
			for(let bar of bars){
				bar.style.width = width.toString() + "%"
			}
			return width < this.props.percentage
		}.bind(this)

		const animate = new Animation(40, frame);
		animate.start()
	}

	render(){
		return(
			<div className="member-progress-bar">
				<div className="progress-bar-container">
					{this.buildProgressBars(this.props.percentage)}
				</div>
			</div>
		)
	}
}

export default DonationProgressBar
