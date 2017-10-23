import React from 'react'
import { getDonationBarColour } from '../../utils/donations'

import css from './DonationProgressBar.scss'

class DonationProgressBar extends React.Component {

	buildProgressBars(fillPercent){
		const bars = []
		const barStyles = {
			"width": fillPercent + "%",
			"backgroundColor": getDonationBarColour(fillPercent),
			"zIndex": 2
		}
		bars[0] = (<div className="bar-fill" key={1} style={barStyles}></div>)

		if(this.props.hasSponsor){
			const matchedBarStyles = {
				"width": (fillPercent*2) + "%",
				"backgroundColor": "#00FFFF",
				"zIndex": 1
			}
			bars[1] = (<div className="bar-fill" key={2} style={matchedBarStyles}></div>)
		}
		return bars
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
