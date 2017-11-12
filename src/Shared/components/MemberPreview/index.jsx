import React from 'react'
import { Link } from 'react-router-dom'
import { calcDonationPercentage, getDonationBarColour } from '../../utils/donations'

import css from './MemberPreview.scss'

import DonationProgressBar from './../DonationProgressBar'

class MemberPreview extends React.Component {

	constructor(props){
		super(props)
		this.donationProgressBar = new DonationProgressBar()
	}

	componentWillMount(){
		this.percentage = calcDonationPercentage(this.props.member)
	}

	componentDidMount(){
		this.donationProgressBar.animateBar(this.percentage)
	}

	createCompletedBanner(percentage) {
		if (percentage >= 100) {
			return <div className="completed-banner">{"Completed!"}</div>
		}
	}

	createMatchedIcon(){
		if(this.props.member.sponsors.length > 0){
			return (
				<div className="matched-icon">
					<img
						src="./images/matched-x2-purple6.png"
						alt="All donations are matched by a sponsor icon"/>
				</div>
			)
		}
	}

		renderDonateButton(percentage, memberID) {
		if (percentage < 100) {
			return <Link className="donate-button" to={`/member?member_id=${memberID}`}>Donate</Link>
		}
	}

	// generateRandomBear() {
	// 	const bearImages = ["images/bear-blue.png", "images/bear-red.png", "images/bear-green.png", "images/bear-yellow.png"]
	// 	console.log(bearImages[Math.floor(Math.random() * 4)]);
	// }

	renderMembersImage() {
		if (this.props.member.url_image == undefined) {
			return `images/${this.props.member.name}.png`
		} else {
			return this.props.member.url_image
		}
	}

	getContainerClassName(){
		let className = "member-preview"
		if(this.props.className) className += " " + this.props.className
		return className
	}

	renderDonors() {
		return (
			<div 	className="member-images">
			  <i className="fa fa-heart"></i> 
				{this.renderBearImage()}
				{this.renderExtraDonorCount()}
			</div>
			)
	}


	renderBearImage() {
		const comments = this.props.member.comments
		const maxFiveComments = comments.slice(0, 5)
		return maxFiveComments.map((comment, id) => {
			if (comment.comment_author[0] >= 'A' && comment.comment_author[0] <= 'G') {
				return <img key={id} src="./images/bear-blue.png"></img>
			} else if(comment.comment_author[0] >= 'H' && comment.comment_author[0] <= 'N') {
				return <img key={id} src="./images/bear-yellow.png"></img>
			} else if(comment.comment_author[0] >= 'O' && comment.comment_author[0] <= 'S') {
				return <img key={id} src="./images/bear-red.png"></img>
			} else {
				<img key={id} src="./images/bear-green.png"></img>
			}
		})
	}

	renderExtraDonorCount() {
		const comments = this.props.member.comments

		if(comments.length > 5) {
			return <p>+{comments.length - 5}</p> 
		}
	}



	render() {
		let previewStyle = this.props.style || {}
		const {member} = this.props
		const percentage = this.percentage || 0
		const hasSponsor = this.props.member.sponsors.length > 0
		const matchedPercentage = hasSponsor ? percentage*2 : percentage
		const percentageToDisplay = (matchedPercentage).toString() + "%"

		return (
			<div className={this.getContainerClassName()} style={previewStyle}>
				{this.createMatchedIcon()}
				<div className="member-photo-container">
					<div className="overflow-container">
						{this.createCompletedBanner(matchedPercentage)}
						<Link className="member-link" to={`/member?member_id=${member.id}`}>
							<img className="member-photo" src={this.renderMembersImage()} />
						</Link>
					</div>
				</div>
				<div className="member-information">
					<Link className="member-link" to={`/member?member_id=${member.id}`}><h3 className="member-name">{member.name}</h3></Link>
					<h4 className="member-location"><i className="fa fa-map-marker"></i>{member.location}</h4>
					<p className="member-description">{member.snippet}</p>
					<h4 className="member-verification">
						<i className="fa fa-check-circle-o" />
						Verified by <Link className="charity-link" to="charity-page">Streetwork</Link>
					</h4>
					<div className="donation-details">
						<div className="progress-details">
							<div className="member-progress">
								<p className="progress-percentage">{percentageToDisplay}</p>
								<p className="progress-label">RAISED</p>
							</div>
							<div className="member-goal">
								<p className="goal-amount">£{member.goal}</p>
								<p className="goal-label">GOAL</p>
							</div>
						</div>
						{this.renderDonateButton(matchedPercentage, member.id)}
						{this.donationProgressBar.render(hasSponsor)}
					</div>
					<div className="member-donations">Donations</div>
					{this.renderDonors(member.comments)}
				</div>
			</div>
		)
	}
}

export default MemberPreview
