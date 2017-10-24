import React from 'react'
import { getDonationBarColour } from '../../utils/donations'

import css from './DonationProgressBar.scss'

import Animation from './../../utils/animate'

class DonationProgressBar{

	constructor(){
		this.constructTime = Date.now()
	}

	animateBar(percentage, time = 1){
		const bars = document.getElementsByClassName(`member${this.constructTime}`)
		this.setProgressBarColours(bars, percentage)
		const framesPerSecond = 35
		const totalFrames = time * framesPerSecond
		const incrementValue = percentage / totalFrames

		const frame = this.buildAnimationFrame(bars, incrementValue, percentage).bind(this)
		const animate = new Animation(framesPerSecond, frame);
		animate.start()
	}

	buildAnimationFrame(bars, incrementValue, percentage, width = 0){
		return () => {
			width += incrementValue
			const isNotOverMax = width < percentage
			for(let bar of bars){
				setTimeout(() => {
					if(isNotOverMax){
						bar.style.width = width.toString() + "%"
					}else{
						bar.style.width = percentage.toString() + "%"
					}
				}, 1)
			}
			return isNotOverMax
		}
	}

	setProgressBarColours(bars, percentage){
		bars[0].style.backgroundColor = getDonationBarColour(percentage)
		if(bars[1]) bars[1].style.backgroundColor = "#8A8DF9"
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
