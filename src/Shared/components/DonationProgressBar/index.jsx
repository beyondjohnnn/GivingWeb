import React from 'react'
import { getDonationBarColour } from '../../utils/donations'

import css from './DonationProgressBar.scss'

import Animation from './../../utils/animate'

class DonationProgressBar{

	constructor(){
		this.constructTime = Date.now()
	}

	animateBar(time, percentage){
		console.log(this.memberId);
		const bars = document.getElementsByClassName(`member${this.constructTime}`)
		this.setProgressBarColours(bars, percentage)
		const framesPerSecond = 35
		time = time/1000
		const ticks = time * framesPerSecond
		const incrementValue = percentage / ticks

		const getWidth = function(){
			let width = 0
			return () => {
				return width+=incrementValue
			}
		}()

		const frame = () => {
			const nextWidth = getWidth()
			const isNotOverMax = nextWidth < percentage
			for(let bar of bars){
				setTimeout(() => {
					if(isNotOverMax){
						bar.style.width = nextWidth.toString() + "%"
					}else{
						bar.style.width = percentage.toString() + "%"
					}
				}, 1)
			}
			return isNotOverMax
		}

		const animate = new Animation(framesPerSecond, frame);
		animate.start()
	}

	setProgressBarColours(bars, percentage){
		bars[0].style.backgroundColor = getDonationBarColour(percentage)
		if(bars.length === 2) bars[1].style.backgroundColor = "#8A8DF9"
	}

	buildProgressBars(hasSponsor){
		const bars = []
		bars[0] = (<div className={`bar-fill member${this.constructTime}`} key={1}></div>)
		if(hasSponsor){
			bars[1] = (<div className={`bar-fill member${this.constructTime}`} key={2}></div>)
		}
		return bars
	}

	render(hasSponsor){
		hasSponsor = hasSponsor || false
		return(
			<div className="member-progress-bar">
				<div className="progress-bar-container">
					{this.buildProgressBars(hasSponsor)}
				</div>
			</div>
		)
	}
}

export default DonationProgressBar
