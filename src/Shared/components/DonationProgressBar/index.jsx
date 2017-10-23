import React from 'react'
import { getDonationBarColour } from '../../utils/donations'

import css from './DonationProgressBar.scss'

import Animation from './../../utils/animate'

class DonationProgressBar extends React.Component {

	constructor(props){
		super(props)
		const member = this.props.member
		this.memberId = member ? member.id : 0
	}

	componentDidMount(){
		setTimeout(() => {
			this.animateBar(750)
		}, 250)
	}

	animateBar(time){
		const bars = document.getElementsByClassName(`member${this.memberId}`)
		const framesPerSecond = 35
		time = time/1000
		const ticks = time * framesPerSecond
		const incrementValue = this.props.percentage / ticks

		const getWidth = function(){
			let width = 0
			return () => {
				return width+=incrementValue
			}
		}()

		const frame = () => {
			const nextWidth = getWidth()
			const isNotOverMax = nextWidth < this.props.percentage
			for(let bar of bars){
				if(isNotOverMax){
					bar.style.width = nextWidth.toString() + "%"
				}else{
					bar.style.width = this.props.percentage + "%"
				}
			}
			return isNotOverMax
		}

		const animate = new Animation(framesPerSecond, frame);
		animate.start()
	}

	buildProgressBars(){
		const bars = []
		const barStyles = {
			"backgroundColor": getDonationBarColour(this.props.percentage),
		}
		bars[0] = (<div className={`bar-fill member${this.memberId}`} key={1} style={barStyles}></div>)

		if(this.props.member.sponsors.length > 0){
			const matchedBarStyles = {
				"backgroundColor": "#8A8DF9",
			}
			bars[1] = (<div className={`bar-fill member${this.memberId}`} key={2} style={matchedBarStyles}></div>)
		}
		return bars
	}

	render(){
		return(
			<div className="member-progress-bar">
				<div className="progress-bar-container">
					{this.buildProgressBars()}
				</div>
			</div>
		)
	}
}

export default DonationProgressBar
