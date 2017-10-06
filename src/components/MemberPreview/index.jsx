import React from 'react'
import { Link } from 'react-router-dom'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {

	devMember(member){

		if(!member){
			member = {
				name: "John Smith",
				location: "North Pole",
				snippet: "Please send help I'm cold",
				"donations": 99.9,
				"goal": 100
			}
		}

		if(!member.donations){
			member.donations = 95.5;
		}

		return member
	}

	calcDonationPercentage(member){
		const donations = member.donations.map((donation) => {
			return donation.total
		}).reduce((a, b) => {
			return a + b
		}, 0)
		let donationPercent = (donations / member.goal) * 100;
		if(donationPercent >= 100) return Math.floor(donationPercent);
		if(donationPercent < 99) return Math.ceil(donationPercent);
		else return 99;
	}

	getDonationBarColour(percentage){
		if(percentage <= 33) return "#FBAC3D";
		else if(percentage <= 66) return "#00CB9B";
		else return "#00862C";
	}

	render() {

		let previewStyle = this.props.style
		if(!previewStyle) previewStyle = {}

		let member = this.devMember(this.props.member)
		let imgUrl = "images/" + member.name + ".png"
		let placeholder = "http://via.placeholder.com/350x350"

		const percentage = this.calcDonationPercentage(member)
		const textPercentage = percentage.toString() + "%"
		const donationBarColour = this.getDonationBarColour(percentage)
		const donationBarStyles = {
			"width": textPercentage,
			"backgroundColor": donationBarColour
		}

		return (
			<div className="member-preview" style={previewStyle}>
				<div className="member-photo-container">
					<Link className="member-link" to={`/member?member_id=${member.id}`}><img className="member-photo" src={imgUrl} /></Link>
				</div>
				<div className="member-information">
					<Link className="member-link" to={`/member?member_id=${member.id}`}><h3 className="member-name">{member.name}</h3></Link>
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
								<p className="progress-percentage">{textPercentage}</p>
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
			</div>	
		)
	}
}

export default MemberPreview
