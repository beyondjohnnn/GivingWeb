import React from 'react'
import { Link } from 'react-router-dom'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {

	devMember(member){

		if(!member){
			return {
				name: "John Smith",
				location: "North Pole",
				snippet: "Please send help I'm cold",
				"donations": 9550,
				"goal": 10000
			}
		}

		if(!member.donations){
			member.donations = 9550;
		}
	}

	calcDonationPercentage(member){
		return (member.donations / member.goal) * 100;
	}

	getDonationBarColour(percentage){
		if(percentage <= 33) return "#FBAC3D";
		else if(percentage > 33 && percentage <= 66) return "#00CB9B";
		return "#00862C";
	}

	render() {
		let member = this.devMember(this.props.member)
		let imgUrl = "./images/" + member.name + ".png"
		console.log(imgUrl);
		let placeholder = "http://via.placeholder.com/350x350"

		const percentage = Math.round((this.calcDonationPercentage(member).toString())*10)/10 + "%";
		const donationBarColour = this.getDonationBarColour(percentage);
		const donationBarStyles = {
			width: percentage,
			"background-color": donationBarColour
		}

		return (
			<div className="member-preview">
				<div className="member-photo-container">
					<img className="member-photo" src={imgUrl} />
				</div>
				<h3 className="member-name">{member.name}</h3>
				<h4 className="member-location"><i className="fa fa-map-marker"></i>{member.location}</h4>
				<p className="member-description">{member.snippet}</p>
				<h4 className="member-verification">
					<i className="fa fa-check-circle-o"></i>
					Verified by <Link className="charity-link" to="charity-page">Streetwork</Link>
				</h4>
				<div className="donation-details">
					<div className="member-progress-bar">
						<div className="bar-fill" style={donationBarStyles}></div>
					</div>
					<div className="progress-details">
						<div className="member-progress">
							<p className="progress-percentage">{percentage}</p>
							<p className="progress-label">RAISED</p>
						</div>
						<div className="member-goal">
							<p className="goal-amount">£{member.goal}</p>
							<p className="goal-label">GOAL</p>
						</div>
					</div>
					<button className="donate-button">Donate</button>
				</div>
				<div className="member-donations">Donations</div>
			</div>
		)
	}
}

export default MemberPreview
